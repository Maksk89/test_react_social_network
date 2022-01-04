import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.postsData
        .map ((post) => <Post content = {post.content} likes_count = {post.likesCount} />)

    const newPostElement = React.createRef ();

    const addPostHandler = () => {
        props.dispatch ({type: 'ADD-POST'});
    }
    const onPostChange = () => {
        const text = newPostElement.current.value;
        const action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch (action);
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
