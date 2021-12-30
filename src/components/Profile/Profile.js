import React from 'react';
import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPosts postsData = {props.state.postsData}
                     addPost = {props.addPost}
                     newPostText = {props.state.newPostText}
                     updateNewPostText = {props.updateNewPostText} />
        </main>
    );
};

export default Profile;
