import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { setProfileInfoAC } from "../../../redux/profile-reducer";
import { withRouter } from "react-router";
import { getProfileInfo } from "../../../api/api";


class ProfileContainer extends React.Component {
    
    componentDidMount () {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = this.props.auth.userId
        }

        getProfileInfo(userID).then(data => this.props.setProfileInfo(data))
    }

    render () {
        return (
            <Profile {...this.props} profileInfo = {this.props.profileInfo} />
        )
    }
}

let mapStateToProps = (state) => ({
    profileInfo: state.profileData.profileInfo,
    auth: state.auth
})

let UrlDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileInfo: setProfileInfoAC}) (UrlDataContainer)