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
    return (
        <div className = {styles.dialogsList}>
            <div className = {styles.dialogsList__item}>
                <DialogItem name = 'Maksim' id = '1' />
                <DialogItem name = 'Mikhail' id = '2' />
                <DialogItem name = 'Maria' id = '3' />
                <DialogItem name = 'Makar' id = '4' />
                <DialogItem name = 'Marina' id = '5' />
            </div>
            <div className = {styles.dialog__messages}>
                <Message message = 'Hello' />
                <Message message = 'How are you?' />
                <Message message = 'What is the weather today?' />
            </div>
        </div>
    );
};

export default Dialogs;
