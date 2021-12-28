import React from 'react';
import styles from '../Dialogs.module.css';

const Message = ({text}) => {
    return (
        <div className = {styles.message__item}>
            {text}
        </div>
    );
};

export default Message;

