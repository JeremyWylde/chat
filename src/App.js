import React, {useEffect, useReducer} from 'react';
import './app.css'
import SignIn from "./Components/SignIn";
import reducer from './reducer';
import socket from './Socket';
import Chat from "./Components/Chat";
import axios from 'axios';


function App() {

    const [state, dispatch] = useReducer(reducer, {
        joined: false,
        chatId: null,
        userName: null,
        users: [],
        messages: []
    });

    const onLogin = async (obj) =>{
        dispatch({
            type:'JOINED',
            payload: obj
        });
        socket.emit('ROOM:JOIN', obj);// отправляем сокет запрос на бек
        const {data} = await axios.get(`/rooms/${obj.chatId}`);
        setUsers(data.users);
    };

    const setUsers = (users) => {
        dispatch({
            type: 'SET_USERS',
            payload: users,
        })
    };

    const addMessage = (message) =>{
        dispatch({
            type: 'NEW_MESSAGE',
            payload: message,
        })
    };

    useEffect(()=>{
        socket.on('ROOM:SET_USERS',setUsers); // как только получаем от сервера запрос ROOM:SET_USERS выполняем setUsers
        socket.on('ROOM:NEW_MESSAGE', message =>addMessage(message));
    },[]);


    return (
        <div className="wrapper">
            <div className='join-block'>
                {!state.joined ? <SignIn onLogin={onLogin}/> : <Chat {...state} onAddMessage={addMessage}/>}
            </div>
        </div>
    );
}

export default App;
