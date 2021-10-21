import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setProfileInfoAC } from "../../../redux/profile-reducer";
import { withRouter } from "react-router";


class ProfileContainer extends React.Component {
    
    componentDidMount () {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = 2
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(data => {
                this.props.setProfileInfo(data.data)
            })
    }

    render () {
        return (
            <Profile {...this.props} profileInfo = {this.props.profileInfo} />
        )
    }
}

let mapStateToProps = (state) => ({
    profileInfo: state.profileData.profileInfo
})

let UrlDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileInfo: setProfileInfoAC}) (UrlDataContainer)