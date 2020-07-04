const express = require('express');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json());
app.use(cors());

const rooms = new Map();

app.get('/rooms/:id', (req, res) => {
    const {id: chatId} = req.params;
    const obj = rooms.has(chatId) ? {
        users: [...rooms.get(chatId).get('users').values()],
        messages: [...rooms.get(chatId).get('messages').values()],
    } : {users: [], messages: []};
    res.json(obj);
});

app.post('/rooms', (req, res) => {
    const {chatId, userName} = req.body;
    if (!rooms.has(chatId)) {
        rooms.set(
            chatId,
            new Map([
                ['users', new Map()],
                ['messages', []],
            ]));
    }
    res.send();
});

io.on('connection', (socket) => {
    socket.on('ROOM:JOIN', ({chatId, userName}) => { //ждем запроса ROOM:JOIN
        socket.join(chatId);
        rooms.get(chatId).get('users').set(socket.id, userName);
        const users = [...rooms.get(chatId).get('users').values()];
        socket.to(chatId).emit('ROOM:SET_USERS', users);
    });

    socket.on('ROOM:NEW_MESSAGE', ({chatId, userName , text}) => { //ждем запроса ROOM:JOIN
        const obj = {
            userName,
            text
        };
        rooms.get(chatId).get('messages').push(obj);
        socket.to(chatId).broadcast.emit('ROOM:NEW_MESSAGE', obj);
    });

    socket.on('disconnect', () => {
        rooms.forEach((value, chatId) => {
            if (value.get('users').delete(socket.id)) {
                const users = [...value.get('users').values()];
                socket.to(chatId).broadcast.emit('ROOM:SET_USERS', users);
            }
        })
    });

    console.log('user connected', socket.id);
});

const port = process.env.PORT || 3020;

server.listen(port, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Сервер запущен')
});
