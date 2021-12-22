import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {

    debugger;

    return (

        <div className = {styles.posts__item}>
            <img
                src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'
                alt = 'avatar picture' />
            {props.message}
            <div>
                <span>like</span>
                <div>   {props.like_count} likes</div>
            </div>
        </div>

    );
};

export default Post;
