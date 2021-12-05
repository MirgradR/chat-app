import { connect } from "react-redux";
import { followUserThunkCreator, friendsActions, getUsersThunkCreator, unFollowUserThunkCreator } from "../../../redux/friends-reducer";
import React, { useEffect } from 'react'
import Friends from './Friends'
import Preloader from "../../Common/Preloader/Preloader";
import { WithAuthRedirect } from "../../../HOC/WithAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFilterFriends, getFollowingProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../../redux/friends-selectors";
import { FriendsContainerPropsType, FriendsContainerStatePropsType } from "../../../types/FriendsTypes/FriendsTypesComponent";
import { AppStateType } from "../../../redux/redux-store";
import { FriendsFilterTermType } from "../../../types/FriendsTypes/FriendsTypes";

const FriendsContainer: React.FC<FriendsContainerPropsType> = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize, props.filter)
    }, [])

    const setCurrentPage = (p: number) => {
        props.setCurrentPage(p)
        props.getUsers(p, props.pageSize, props.filter)
    }

    const onFilterChanged = (filter: FriendsFilterTermType) => {
        props.getUsers(1, props.pageSize, filter)
    }

    return (
        <div>
            {props.isFetching ? <Preloader /> : <Friends
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                setCurrentPage={setCurrentPage}
                users={props.users}
                followUser={props.followUser}
                unfollowUser={props.unfollowUser}
                followingProgress={props.followingProgress}
                onFilterChanged = {onFilterChanged} />}
        </div>
    )
}


const mapStateToProps = (state: AppStateType): FriendsContainerStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
        filter: getFilterFriends(state)
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
) (FriendsContainer) as React.ComponentType
