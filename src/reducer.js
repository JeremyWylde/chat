export default (state, action) =>{
    switch (action.type) {
        case 'JOINED':
            return{
                ...state,
                joined: true,
                userName: action.payload.userName,
                chatId: action.payload.chatId
            };
        default:
            return state;
    }
}