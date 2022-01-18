import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className = {styles.nav}>
            <ul>
                <li className = {styles.nav__item}><NavLink to = 'profile'
                                                            className = {navData => navData.isActive ? styles.active : styles.nav__item}>Profile</NavLink>
                </li>
                <li className = {styles.nav__item}><NavLink to = 'dialogs'
                                                            className = {navData => navData.isActive ? styles.active : styles.nav__item}>Messages</NavLink>
                </li>
                <li className = {styles.nav__item}><NavLink to = 'news'
                                                            className = {navData => navData.isActive ? styles.active : styles.nav__item}>News</NavLink>
                </li>
                <li className = {styles.nav__item}><NavLink to = 'music'
                                                            className = {navData => navData.isActive ? styles.active : styles.nav__item}>Music</NavLink>
                </li>
                <li className = {styles.nav__item}><NavLink to = 'settings'
                                                            className = {navData => navData.isActive ? styles.active : styles.nav__item}>Settings</NavLink>
                </li>
                <li className = {styles.nav__item}><NavLink to = 'users'
                                                            className = {navData => navData.isActive ? styles.active : styles.nav__item}>Users</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
