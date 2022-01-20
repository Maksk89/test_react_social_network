import React, { Component } from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png';


class Users extends Component {

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
        const pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push (i);
        }
        return (
            <div>
                <div>
                    {pages.map (page => {
                        return <span
                            className = {this.props.currentPage === page && styles.selectedPage}
                            onClick = {(event) => {
                                this.pageChangeHandler (page);
                            }}>{page}</span>;
                    })}
                </div>
                <div>
                    {
                        this.props.users.map (user => <div key = {user.id}>
                        <span>
                            <div>
                            <img src = {user.photos.small != null ? user.photos.small : userPhoto}
                                 alt = ''
                                 className = {styles.userPhoto} />
                        </div>
                            <div>
                                {
                                    user.followed
                                        ? <button onClick = {() => {
                                            this.props.unfollow (user.id);
                                        }}>Unfollow</button>
                                        : <button onClick = {() => {
                                            this.props.follow (user.id);
                                        }}>Follow</button>
                                }
                            </div>
                        </span>
                                <span>
                            <span>
                                <div>
                                    {user.name}
                                </div>
                                <div>
                                    {user.status}
                                </div>
                            </span>
                            <span>
                                <div>{"user.location.city"}</div>
                                <div>{"user.location.country"}</div>
                        </span>
                        </span>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}


export default Users;


