import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, getProfileStatusThunkCreator, savePhotoThunkCreator, setProfileInfoThunkCreator, updateProfileStatusThunkCreator } from "../../../redux/profile-reducer";
import { withRouter } from "react-router";
import { WithAuthRedirect } from "../../../HOC/WithAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        this.props.setProfileInfo(this.props.match.params.userId, this.props.auth.userId)
        this.props.getProfileStatus(this.props.match.params.userId, this.props.auth.userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }    
    }

    render() {
        return (
            <div>
                <Profile
                    profileInfo={this.props.profileInfo}
                    status={this.props.status}
                    updateStatus={this.props.updateProfileStatus}
                    posts = {this.props.posts}
                    auth = {this.props.auth}
                    addPost = {this.props.addPost}
                    isOwner = {this.props.match.params.userId}
                    savePhoto = {this.props.savePhoto}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({    
    profileInfo: state.profileData.profileInfo,
    auth: state.auth,
    status: state.profileData.status,
    posts: state.profileData.postUsers
})

export default compose (
    connect(mapStateToProps, {setProfileInfo: setProfileInfoThunkCreator, 
        getProfileStatus: getProfileStatusThunkCreator, 
        updateProfileStatus: updateProfileStatusThunkCreator,
        addPost: addPostActionCreator,
        savePhoto: savePhotoThunkCreator
    }),
    withRouter,
    WithAuthRedirect) (ProfileContainer)





// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

// let UrlDataContainer = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {setProfileInfo: setProfileInfoThunkCreator}) (UrlDataContainer)