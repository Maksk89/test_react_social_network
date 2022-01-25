import React, { useEffect } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../my_redux/authReducer';

const HeaderContainer = props => {
    useEffect (() => {
        axios.get (`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then (response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data;
                    props.setAuthUserData (id, email, login);
                }
            });
    }, []);
    return < Header {...props} />;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};

export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);