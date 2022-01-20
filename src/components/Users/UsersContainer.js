import React from 'react';
import { connect } from 'react-redux';
import Users from './UsersC';
import {
    followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from '../../my_redux/usersReducer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch (setCurrentPageActionCreator (pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch (setTotalUsersCountActionCreator (totalCount));
        }
    };

};


const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;
