import { connect } from "react-redux";
import { followUserThunkCreator, friendsActions, getUsersThunkCreator, unFollowUserThunkCreator } from "../../../redux/friends-reducer";
import React from 'react'
import Friends from './Friends'
import Preloader from "../../Common/Preloader/Preloader";
import { WithAuthRedirect } from "../../../HOC/WithAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../../redux/friends-selectors";
import { FriendsContainerPropsType, FriendsContainerStatePropsType } from "../../../types/FriendsTypes/FriendsTypesComponent";
import { AppStateType } from "../../../redux/redux-store";

class FriendsContainer extends React.Component<FriendsContainerPropsType> {
    
    componentDidMount() { 
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.getUsers(p, this.props.pageSize)
    }
    
    render() {
        return   (
            <div>
                {this.props.isFetching ? <Preloader/> : <Friends
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.setCurrentPage}
                    users={this.props.users}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    
                    followingProgress = {this.props.followingProgress} />}
            </div>   
        )
    }
}

const mapStateToProps = (state: AppStateType): FriendsContainerStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}

export default compose (
    connect (mapStateToProps, {
        followUser: followUserThunkCreator,
        unfollowUser: unFollowUserThunkCreator,
        setCurrentPage: friendsActions.setCurrentPageAC,
        toggleFollowingProgress: friendsActions.toggleFollowingProgressAC,
        getUsers: getUsersThunkCreator
        }),
    WithAuthRedirect
) (FriendsContainer)

//setUsers={this.props.setUsers} 
//<FriendsContainerStatePropsType, FriendsContainerDispatchPropsType, FriendsContainerOwnPropsType, AppStateType >