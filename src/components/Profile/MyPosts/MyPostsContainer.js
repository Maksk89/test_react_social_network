import React from 'react';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from '../../../my_redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../my_redux/StoreContext';


const MyPostsContainer = (props) => {
    // const state = props.store.getState ();


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState ();
                    const addPost = () => {
                        store.dispatch (addPostActionCreator ());
                    };
                    const onPostChange = (text) => {
                        const action = updateNewPostTextActionCreator (text);
                        store.dispatch (action);
                    };
                    return (
                        <MyPosts updateNewPostText = {onPostChange} addPost = {addPost}
                                 postsData = {state.profilePage.postsData}
                                 newPostText = {state.profilePage.newPostText} />
                    );
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
