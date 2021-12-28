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

const Message = ({text}) => {
    return (
        <div className = {styles.message__item}>
            {text}
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
        {id: 1, text: 'Hello'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'What is the weather today?'},
        {id: 4, text: 'What are your hobbies?'},
        {id: 5, text: 'What music do you prefer?'}
    ]

    const dialogsElements = dialogsData
        .map (dialog =>
            <DialogItem name = {dialog.name} id = {dialog.id} />
        );

    const messagesElements = messagesData
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
