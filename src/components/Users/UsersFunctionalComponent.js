import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function UsersFunctionalComponent (props) {
    const pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push (i);
    }
    return (
        <div>
            <div>
                {pages.map (page => {
                    return <span
                        className = {props.currentPage === page && styles.selectedPage}
                        onClick = {(event) => {
                            props.pageChangeHandler (page);
                        }}>{page}</span>;
                })}
            </div>
            <div>
                {
                    props.users.map (user => <div key = {user.id}>
                        <span>
                            <div>
                            <NavLink to = {'/profile/' + user.id}>
                                <img
                                    src = {user.photos.small != null ? user.photos.small : userPhoto}
                                    alt = ''
                                    className = {styles.userPhoto} />
                            </NavLink>
                        </div>
                            <div>
                                {
                                    user.followed
                                        ? <button onClick = {() => {

                                            axios.post (`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                withCredentials: true
                                            })
                                                .then (response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow (user.id);
                                                    }
                                                });

                                        }}>Unfollow</button>
                                        : <button onClick = {() => {

                                            axios.delete (`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                withCredentials: true
                                            })
                                                .then (response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow (user.id);
                                                    }
                                                });


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

export default UsersFunctionalComponent;