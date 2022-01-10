import React from 'react';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from '../../../my_redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch (updateNewPostTextActionCreator (text));
        },
        addPost: () => {
            dispatch (addPostActionCreator ());
        }

    };
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
