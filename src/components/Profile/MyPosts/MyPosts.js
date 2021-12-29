import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.postsData
        .map ((post) => <Post message = {post.message} likes_count = {post.likesCount} />)

    const newPostElement = React.createRef ();

    const addPostHandler = () => {
        debugger;
        const text = newPostElement.current.value;
        alert (text)
    }

    return (
        <div className = {styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref = {newPostElement}></textarea>
                </div>
                <div>
                    <button onClick = {addPostHandler}>Add post
                    </button>
                </div>
            </div>
            <div className = {styles.posts}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;
