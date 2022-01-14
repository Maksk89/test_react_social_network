const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    usersData: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map (user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map (user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                usersData: [...state.usersData, ...action.users]
            };
        }
        default:
            return state;
    }
};

const followActionCreator = (userId) => ({type: FOLLOW, userId});
const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export { usersReducer, followActionCreator, unfollowActionCreator, setUsersActionCreator };