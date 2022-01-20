import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from '../../my_redux/usersReducer';
import axios from 'axios';
import UsersFunctionalComponent from './UsersFunctionalComponent';

class UsersAPIComponent extends Component {

    componentDidMount () {
        if (this.props.users.length === 0) {
            axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then (response => {

                    this.props.setUsers (response.data.items);
                    this.props.setTotalUsersCount (response.data.totalCount);
                });
        }
    }

    pageChangeHandler = (pageNumber) => {
        this.props.setCurrentPage (pageNumber);
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then (response => {
                this.props.setUsers (response.data.items);

            });
    };

    render () {
        return <UsersFunctionalComponent totalUsersCount = {this.props.totalUsersCount}
                                         pageSize = {this.props.pageSize}
                                         currentPage = {this.props.currentPage}
                                         pageChangeHandler = {this.pageChangeHandler}
                                         users = {this.props.users}
                                         follow = {this.props.follow}
                                         unfollow = {this.props.unfollow}
        />;
    }
}


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


const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (UsersAPIComponent);
export default UsersContainer;
