import React, { useEffect } from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../my_redux/profileReducer';
import { useParams } from 'react-router-dom';


const ProfileContainerFunctional = (props) => {
    let {userId} = useParams ();
    if (!userId) {
        userId = 2;
    }
    useEffect (() => {
        axios.get ('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then (response => {
                props.setUserProfile (response.data);
            });
    }, []);

    return (
        <Profile {...props} profile = {props.profile} />
    );
};

const mapStateToProps = (state) => {
    return {profile: state.profilePage.profile};

};


export default connect (mapStateToProps, {
    setUserProfile
}) (ProfileContainerFunctional);




