import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className = {styles.header}>
            <img
                src = 'https://us.123rf.com/450wm/djati11/djati111808/djati11180800105/105671036-star-logo-template-vector-icon-illustration-design.jpg?ver=6'
                alt = 'logo' />
            <div className = {styles.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to = 'login'>Log In</NavLink>}
            </div>
        </header>
    );
};

export default Header;