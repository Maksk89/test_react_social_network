import React, { Component } from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../my_redux/profileReducer';

class ProfileContainer extends Component {

    componentDidMount () {
        let userId = 2;
        if (!userId) {
            userId = 2;
        }
        axios.get (`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then (response => {
                this.props.setUserProfile (response.data);
            });
    }

    render () {
        return (
            <Profile {...this.props} profile = {this.props.profile} />
        );
    }
}

const mapStateToProps = (state) => {
    return {profile: state.profilePage.profile};

};


export default connect (mapStateToProps, {
    setUserProfile
}) (ProfileContainer);