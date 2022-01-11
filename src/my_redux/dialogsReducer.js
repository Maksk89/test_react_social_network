const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogsData: [
        {id: 1, name: 'Maksim'},
        {id: 2, name: 'Mikhail'},
        {id: 3, name: 'Maria'},
        {id: 4, name: 'Makar'},
        {id: 5, name: 'Marina'}
    ],
    messagesData: [
        {id: 1, text: 'Hello'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'What is the weather today?'},
        {id: 4, text: 'What are your hobbies?'},
        {id: 5, text: 'What music do you prefer?'}
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            const body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 6, text: body}],

            };
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