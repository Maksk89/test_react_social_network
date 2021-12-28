import styles from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react'

const DialogItem = ({name, id}) => {
    const path = id
    return (
        <div className = {styles.dialog__item}>
            <NavLink to = {path}>{name}</NavLink>
        </div>
    )
        ;
};

export default DialogItem;
