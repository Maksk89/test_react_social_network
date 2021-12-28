import React from 'react';
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src = 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
                     alt = '' />
            </div>
            <div className = {styles.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
};

export default ProfileInfo;
