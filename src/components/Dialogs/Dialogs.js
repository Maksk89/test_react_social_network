import React from 'react';
import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

// import React from 'react';

const DialogItem = ({name, id}) => {
    const path = id
    return (
        <div className = {styles.dialog__item}>
            <NavLink to = {path}>{name}</NavLink>
        </div>
    )
        ;
};

// export default DialogItem;

// import React from 'react';

const Message = ({message}) => {
    return (
        <div className = {styles.message__item}>
            {message}
        </div>
    );
};

// export default Message;


const Dialogs = ({props}) => {

    const dialogsData = [
        {id: 1, name: 'Maksim'},
        {id: 2, name: 'Mikhail'},
        {id: 3, name: 'Maria'},
        {id: 4, name: 'Makar'},
        {id: 5, name: 'Marina'}
    ]

    const messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is the weather today?'},
        {id: 4, message: 'What are your hobbies?'},
        {id: 5, message: 'What music do you prefer?'}
    ]

    return (
        <div className = {styles.dialogsList}>
            <div className = {styles.dialogsList__item}>
                <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id} />
                <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id} />
            </div>
            <div className = {styles.dialog__messages}>
                <Message message = {messagesData[0].message} />
                <Message message = {messagesData[1].message} />
                <Message message = {messagesData[2].message} />
            </div>
        </div>
    );
};

export default Dialogs;
