import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import UsersFunctionalComponent from './UsersFunctionalComponent';
import Preloader from '../common/Preloader/Preloader';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from '../../my_redux/usersReducer';

class UsersAPIComponent extends Component {

    componentDidMount () {
        this.props.toggleIsFetching (true);
        if (this.props.users.length === 0) {
            axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
                .then (response => {
                    this.props.toggleIsFetching (false);
                    this.props.setUsers (response.data.items);
                    this.props.setTotalUsersCount (response.data.totalCount);
                });
        }
    }

    pageChangeHandler = (pageNumber) => {
        this.props.setCurrentPage (pageNumber);
        this.props.toggleIsFetching (true);
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then (response => {
                this.props.toggleIsFetching (false);
                this.props.setUsers (response.data.items);

            });
    };

    render () {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <UsersFunctionalComponent totalUsersCount = {this.props.totalUsersCount}
                                      pageSize = {this.props.pageSize}
                                      currentPage = {this.props.currentPage}
                                      pageChangeHandler = {this.pageChangeHandler}
                                      users = {this.props.users}
                                      follow = {this.props.follow}
                                      unfollow = {this.props.unfollow}
            />
        </>;
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch (followActionCreator (userId));
//         },
//         unfollow: (userId) => {
//             dispatch (unfollowActionCreator (userId));
//         },
//         setUsers: (users) => {
//             dispatch (setUsersActionCreator (users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch (setCurrentPageActionCreator (pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch (setTotalUsersCountActionCreator (totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch (toggleIsFetchingActionCreator (isFetching));
//         }
//     };
//
// };


const UsersContainer = connect (mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}) (UsersAPIComponent);
export default UsersContainer;
