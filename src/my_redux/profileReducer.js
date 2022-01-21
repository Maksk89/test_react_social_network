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
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
};

// action creators

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});
export { profileReducer };