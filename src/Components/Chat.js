import React from 'react';
import socket from '../Socket';
import '../index.css'

function Chat({users, messages, userName, chatId, onAddMessage}) {
    const [messageValue, setMessageValue] = React.useState('');
    const messagesRef = React.useRef(null);

    const onSendMessage = () => {
        socket.emit('ROOM:NEW_MESSAGE', {
            userName,
            chatId,
            text: messageValue,
        });
        onAddMessage({userName, text: messageValue});
        setMessageValue('');
    };

    React.useEffect(() => {
        messagesRef.current.scroll(0, messagesRef.current.scrollHeight);
    }, [messages]);

    console.log(users);

    return (
        <div className="chat">
            <div className="chat-users">
                Chat:<b>{chatId}</b>
                <hr/>
                <b>Онлайн ({users.length}):</b>
                <ul>
                    {users.map((name, index) => (
                        <li key={name + index}>{name}</li>
                    ))}
                </ul>
            </div>
            <div className="chat-messages">
                <div ref={messagesRef} className="messages">
                    {messages.map(message => (
                        <div key={message.text} className="message">
                            <p>{message.text}</p>
                            <div>
                                <span>{message.userName}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <form>
          <textarea value={messageValue} onChange={e => {
              setMessageValue(e.target.value)
          }}
                    className='form-control' rows='3'/>
                    <button onClick={onSendMessage} type="button" className="btn btn-primary">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Chat;