import { connect } from "react-redux";
import { followUserThunkCreator, friendsActions, getUsersThunkCreator, unFollowUserThunkCreator } from "../../../redux/friends-reducer";
import React, { useEffect } from 'react'
import Friends from './Friends'
import Preloader from "../../Common/Preloader/Preloader";
import { WithAuthRedirect } from "../../../HOC/WithAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../../redux/friends-selectors";
import { FriendsContainerPropsType, FriendsContainerStatePropsType } from "../../../types/FriendsTypes/FriendsTypesComponent";
import { AppStateType } from "../../../redux/redux-store";

const FriendsContainer: React.FC<FriendsContainerPropsType> = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [])

    const setCurrentPage = (p: number) => {
        props.setCurrentPage(p)
        props.getUsers(p, props.pageSize)
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
                followingProgress={props.followingProgress} />}
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
) (FriendsContainer) as React.ComponentType
