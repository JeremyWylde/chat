const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.json());

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
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
    socket.on('ROOM:JOIN',({chatId, userName}) =>{ //ждем запроса ROOM:JOIN
       socket.join(chatId);
       rooms.get(chatId).get('users').socket(socket.id, userName);
       const users = rooms.get(chatId).get('users').values();
    });
    console.log('user connected', socket.id);
});

server.listen(9999, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Сервер запущен')
});
