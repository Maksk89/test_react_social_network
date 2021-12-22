import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className = {styles.header}>
            <img
                src = 'https://us.123rf.com/450wm/djati11/djati111808/djati11180800105/105671036-star-logo-template-vector-icon-illustration-design.jpg?ver=6'
                alt = 'logo' />
        </header>
    );
}

export default Header;