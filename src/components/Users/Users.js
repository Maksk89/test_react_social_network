import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
    debugger;
    if (props.users.length === 0) {
        props.setUsers ([
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwi15bXUebT2_ACL74HWxVCmByiiXKSRG4Q&usqp=CAU',
                    followed: false,
                    fullName: 'Maksim',
                    status: 'This is a test status',
                    location: {city: 'Severomorsk', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwi15bXUebT2_ACL74HWxVCmByiiXKSRG4Q&usqp=CAU',
                    followed: true,
                    fullName: 'Aleksandr',
                    status: 'This is a test status, too',
                    location: {city: 'Nizhniy Novgorod', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwi15bXUebT2_ACL74HWxVCmByiiXKSRG4Q&usqp=CAU',
                    followed: true,
                    fullName: 'Andrey',
                    status: 'This is a test status, too',
                    location: {city: 'Moscow', country: 'Russia'}
                }
            ]
        );
    }
    return (
        <div>
            {
                props.users.map (user => <div key = {user.id}>
                        <span>
                            <div>
                            <img src = {user.photoUrl} alt = '' className = {styles.userPhoto} />
                        </div>
                            <div>
                                {
                                    user.followed
                                        ? <button onClick = {() => {
                                            props.unfollow (user.id);
                                        }}>Unfollow</button>
                                        : <button onClick = {() => {
                                            props.follow (user.id);
                                        }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>
                                    {user.fullName}
                                </div>
                                <div>
                                    {user.status}
                                </div>
                            </span>
                            <span>
                                <div>{user.location.city}</div>
                                <div>{user.location.country}</div>
                        </span>
                        </span>
                    </div>
                )
            }
        </div>
    );
};

export default Users;
