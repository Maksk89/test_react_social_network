import React from 'react';
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className = {styles.nav}>
            <ul>
                <li className = {styles.nav__item}><Link to = 'profile'>Profile</Link></li>
                <li className = {styles.nav__item}><Link to = 'dialogs'>Messages</Link></li>
                <li className = {styles.nav__item}><Link to = 'news'>News</Link></li>
                <li className = {styles.nav__item}><Link to = 'music'>Music</Link></li>
                <li className = {styles.nav__item}><Link to = 'settings'>Settings</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
