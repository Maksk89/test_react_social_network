import React from 'react';
import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPosts postsData = {props.state.postsData}
                     newPostText = {props.state.newPostText}
                     dispatch = {props.dispatch} />
        </main>
    );
};

export default Profile;
