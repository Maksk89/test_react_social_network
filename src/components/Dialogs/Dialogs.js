import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {


    const dialogsElements = props.state.dialogsData
        .map (dialog =>
            <DialogItem name = {dialog.name} id = {dialog.id} />
        );

    const messagesElements = props.state.messagesData
        .map ((message) => <Message text = {message.text} />)


    return (
        <div className = {styles.dialogsList}>
            <div className = {styles.dialogsList__item}>
                {dialogsElements}
            </div>
            <div className = {styles.dialog__messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
