import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { sidebarReducer } from './sidebarReducer';

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
        },
        sidebar: {}
    },
    _callSubscriber () {
        console.log ('State was changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
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
        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer (this._state.sidebar, action);
        this._callSubscriber (this._state);
    }
};


export default store;
export {};