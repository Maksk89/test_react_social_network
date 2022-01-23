const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

const initialState = {
    postsData: [
        {id: 1, content: 'Hi', likesCount: 10},
        {id: 2, content: 'How are you?', likesCount: 15},
        {id: 3, content: 'This is a post', likesCount: 5},
    ],
    newPostText: 'Test',
    profile: null,
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
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
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
export const setUserProfile = (profile) => ({
    type: SET_USERS_PROFILE, profile
});
export { profileReducer };