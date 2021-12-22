import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className = {styles.posts}>
                <Post message = 'Hi' like_count = '10' />
                <Post message = 'How are you' like_count = '15' />
            </div>
        </div>

    );
};

export default MyPosts;
