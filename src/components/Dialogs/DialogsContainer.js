import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from '../../my_redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    const state = props.store.getState ().dialogsPage;

    
    const sendMessageHandler = () => {
        props.store.dispatch (sendMessageActionCreator ());
    };
    const newMessageChangeHandler = (body) => {
        props.store.dispatch (updateNewMessageBodyActionCreator (body));

    };

    return (<Dialogs updateNewMessageBody = {newMessageChangeHandler}
                     sendMessage = {sendMessageHandler} dialogsPage = {state} />);
};

export default DialogsContainer;
