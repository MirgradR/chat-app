import { createSelector } from "reselect"



export const getUsersSelector = (state) => {
    return state.friendsData.users
}

// export const getUsersSelector = (state) => {     не нужен, это пример использования
//     return getUsers(state).filter(u => true)
// }

export const getUsers = createSelector( getUsersSelector, (users)  => {
    return users.filter(u => true)
})





export const getPageSize = (state) => {
    return state.friendsData.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.friendsData.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.friendsData.currentPage
}
export const getIsFetching = (state) => {
    return state.friendsData.isFetching
}
export const getFollowingProgress = (state) => {
    return state.friendsData.followingProgress
}

