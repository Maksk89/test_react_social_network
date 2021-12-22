import React from 'react';
import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <main className = {styles.content}>
            <div>
                <img src = 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
                     alt = '' />
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts />
        </main>
    );
};

export default Profile;
