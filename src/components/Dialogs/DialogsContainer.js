import React from 'react';
import {
    sendMessage, updateNewMessageBody
} from '../../my_redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

/*const mapDispatchToProps = (dispatch) => {
 return {
 updateNewMessageBody: (body) => {
 dispatch (updateNewMessageBodyActionCreator (body));
 },
 sendMessage: () => {
 dispatch (sendMessageActionCreator ());
 },
 };
 };*/

const DialogsContainer = connect (mapStateToProps, {
    updateNewMessageBody,
    sendMessage
}) (Dialogs);

export default DialogsContainer;
