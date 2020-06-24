import io from 'socket.io-client';

const socket = io('https://jeremy-wylde-backend-for-chat.herokuapp.com');

export default socket;