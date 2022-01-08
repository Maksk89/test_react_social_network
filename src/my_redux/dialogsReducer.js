const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;
            return state;
        }
        case SEND_MESSAGE: {
            const body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push ({id: 6, text: body});
            return state;
        }
        default:
            return state;
    }
};

const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});


export { dialogsReducer, sendMessageActionCreator, updateNewMessageBodyActionCreator };