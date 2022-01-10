import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from '../../my_redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../my_redux/StoreContext';

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState ().dialogsPage;
                    const sendMessageHandler = () => {
                        props.store.dispatch (sendMessageActionCreator ());
                    };
                    const newMessageChangeHandler = (body) => {
                        props.store.dispatch (updateNewMessageBodyActionCreator (body));
                    };
                    return (
                        <Dialogs updateNewMessageBody = {newMessageChangeHandler}
                                 sendMessage = {sendMessageHandler} dialogsPage = {state} />
                    );
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
