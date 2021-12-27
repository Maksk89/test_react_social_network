import React from 'react';
import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

// import React from 'react';

const DialogItem = (props) => {
    const path = "dialogs/" + props.id
    return (
        <div className = {styles.dialog__item}>
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
        ;
};

// export default DialogItem;

const Dialogs = ({props}) => {
    return (
        <div className = {styles.dialogsList}>
            <div className = {styles.dialogsList__item}>
                <DialogItem name = 'Maksim' id = "1" />
                <div className = {styles.dialog__item}>
                    <NavLink to = 'dialogs/2'>Mikhail</NavLink>
                </div>
                <div className = {`${styles.dialog__item} ${styles.active}`}>
                    <NavLink to = 'dialogs/3'>Maria</NavLink>
                </div>
                <div className = {styles.dialog__item}>
                    <NavLink to = 'dialogs/4'>Makar</NavLink>
                </div>
                <div className = {styles.dialog__item}>
                    <NavLink to = 'dialogs/5'>Marina</NavLink>
                </div>
            </div>
            <div className = {styles.dialog__messages}>
                <div className = {styles.message__item}>Hello</div>
                <div className = {styles.message__item}>How are you?</div>
                <div className = {styles.message__item}>What's the weather today?</div>
            </div>
        </div>
    );
};

export default Dialogs;
