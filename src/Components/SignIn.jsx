import React, {useState} from 'react';
import axios from 'axios'


function SignIn({onLogin}) {

    const [chatId, setChatId] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setLoading] = useState(false);

    const submitButton = async () =>{
        if(!chatId || !userName)
            return alert('Заполните поля');

        const obj = {chatId,userName};
        setLoading(true);

        await axios.post('https://jeremy-wylde-backend-for-chat.herokuapp.com/rooms', obj);
        onLogin(obj);
    };

    return (
            <div className='join-block1'>
                <input type='text' placeholder='Chat ID' value={chatId} onChange={e=>setChatId(e.target.value)}/>
                <input type='text' placeholder='Name' value={userName} onChange={e=>setUserName(e.target.value)}/>
                <button onClick={submitButton} disabled={isLoading}
                        className='btn btn-success'>{isLoading ? 'Entering...' : 'Enter'}</button>
            </div>
    );
}

export default SignIn;
