import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from '../../my_redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch (followActionCreator (userId));
        },
        unfollow: (userId) => {
            dispatch (unfollowActionCreator (userId));
        },
        setUsers: (users) => {
            dispatch (setUsersActionCreator (users));
        }
    };

};


const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;
