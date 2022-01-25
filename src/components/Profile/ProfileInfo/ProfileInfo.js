import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    return (
        <div>
            <div>
                <img src = 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
                     alt = '' />
            </div>
            <div className = {styles.descriptionBlock}>
                <img src = {props.profile.photos.large} />
                <div>
                    {props.profile.aboutMe}
                </div>
                avatar + description
            </div>
        </div>
    );
};

export default ProfileInfo;
