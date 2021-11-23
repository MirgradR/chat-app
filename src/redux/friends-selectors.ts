import { createSelector } from "reselect"
import { AppStateType } from "./redux-store"

export const getUsersSelector = (state: AppStateType) => {
    return state.friendsData.users
}

export const getUsers = createSelector( getUsersSelector, (users)  => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType) => {
    return state.friendsData.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.friendsData.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.friendsData.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.friendsData.isFetching
}
export const getFollowingProgress = (state: AppStateType) => {
    return state.friendsData.followingProgress
}

