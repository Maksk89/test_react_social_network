import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    const postsData = [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 15},
        {id: 2, message: 'This is a post', likesCount: 5},

    ]

    return (
        <div className = {styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className = {styles.posts}>
                <Post message = {postsData[0].message} likes_count = {postsData[0].likesCount} />
                <Post message = {postsData[1].message} likes_count = {postsData[1].likesCount} />
                <Post message = {postsData[2].message} likes_count = {postsData[2].likesCount} />
            </div>
        </div>

    );
};

export default MyPosts;
