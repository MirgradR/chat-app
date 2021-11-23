import { FriendsUsersType } from "./FriendsTypes";

export type FriendsContainerPropsType = FriendsContainerStatePropsType & FriendsContainerDispatchPropsType & FriendsContainerOwnPropsType

export type FriendsContainerStatePropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<FriendsUsersType>
    followingProgress: Array<number>
    isFetching: boolean
}
export type FriendsContainerDispatchPropsType = {
    setCurrentPage: (pageNumber: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type FriendsContainerOwnPropsType = {
    prop?: any
}

export type FriendsPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    users: Array<FriendsUsersType>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    followingProgress: Array<number>
}