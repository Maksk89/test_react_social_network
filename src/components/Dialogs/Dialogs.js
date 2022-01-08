import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from '../../my_redux/dialogsReducer';

const Dialogs = (props) => {
    const state = props.store.getState ().dialogsPage;

    const dialogsElements = state.dialogsData
        .map (dialog =>
            <DialogItem name = {dialog.name} id = {dialog.id} />
        );

    const messagesElements = state.messagesData
        .map ((message) => <Message text = {message.text} />);
    const newMessageBody = state.newMessageBody;

    const sendMessageHandler = () => {
        props.store.dispatch (sendMessageActionCreator ());
    };
    const newMessageChangeHandler = (event) => {
        const body = event.target.value;
        props.store.dispatch (updateNewMessageBodyActionCreator (body));

    };

    return (
        <div className = {styles.dialogsList}>
            <div className = {styles.dialogsList__item}>
                {dialogsElements}
            </div>
            <div className = {styles.dialog__messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder = 'Enter your message'
                                   value = {newMessageBody}
                                   onChange = {newMessageChangeHandler} />
                    </div>
                    <div>
                        <button onClick = {sendMessageHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
