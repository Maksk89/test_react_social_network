import React from 'react';
import {
    addPost,
    updateNewPostText
} from '../../../my_redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
};

/*
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
 */

let MyPostsContainer;
MyPostsContainer = connect (mapStateToProps, {
    updateNewPostText,
    addPost
}) (MyPosts);

export default MyPostsContainer;
