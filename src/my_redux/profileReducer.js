const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    postsData: [
        {id: 1, content: 'Hi', likesCount: 10},
        {id: 2, content: 'How are you?', likesCount: 15},
        {id: 3, content: 'This is a post', likesCount: 5},
    ],
    newPostText: 'Test',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 4,
                content: state.newPostText,
                likesCount: 0,
            };
            state.postsData.push (newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
        default:
            return state;
    }
};

const addPostActionCreator = () => ({type: ADD_POST});
const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});
export { profileReducer, addPostActionCreator, updateNewPostTextActionCreator };