import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.postsData
        .map ((post) => <Post content = {post.content} likes_count = {post.likesCount} />)

    const newPostElement = React.createRef ();

    const addPostHandler = () => {
        props.addPost ()
    }
    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText (text);
    }
    return (
        <div className = {styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref = {newPostElement} value = {props.newPostText}
                              onChange = {onPostChange} />
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
