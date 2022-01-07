const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, content: 'Hi', likesCount: 10},
                {id: 2, content: 'How are you?', likesCount: 15},
                {id: 3, content: 'This is a post', likesCount: 5},
            ],
            newPostText: 'Test',
        },
        dialogsPage: {
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
        }
    },
    _callSubscriber () {
        console.log ('State was changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    addPost () {
        const newPost = {
            id: 4,
            content: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.postsData.push (newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber (this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber (this._state);
    },
    dispatch (action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 4,
                content: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.postsData.push (newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber (this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber (this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber (this._state);
        } else if (action.type === SEND_MESSAGE) {
            const body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push ({id: 6, text: body})
            this._callSubscriber (this._state);
        }
    }
}

const addPostActionCreator = () => ({type: ADD_POST})
const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default store
export {
    addPostActionCreator,
    updateNewPostTextActionCreator,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
}