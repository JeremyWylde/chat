import React, {useReducer} from 'react';
import './app.css'
import SignIn from "./Components/SignIn";
import reducer from './reducer';
import socket from './Socket';


function App() {

    const [state, dispatch] = useReducer(reducer, {
        joined: false,
        chatId: null,
        userName: null
    });

    const onLogin = (obj) =>{
        dispatch({
            type:'JOINED',
            payload: obj
        });
        socket.emit('ROOM:JOIN', obj);// отправляем сокет запрос на бек
    };

console.log(state);
    return (
        <div className="wrapper">
            <div className='join-block'>
                {!state.joined && <SignIn onLogin={onLogin}/>}
            </div>
        </div>
    );
}

export default App;
