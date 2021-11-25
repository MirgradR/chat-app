import { ThunkAction } from "redux-thunk"
import { AppStateType } from "../../redux/redux-store"
import { ProfileProfileInfoPhotosType } from "../ProfileTypes/ProfileTypes"

const FOLLOW = 'FRIENDS/FOLLOW'
const UNFOLLOW = 'FRIENDS/UNFOLLOW'
const SET_USERS = 'FRIENDS/SET-USERS'
const SET_CURRENT_PAGE = 'FRIENDS/SET-CURRENT-PAGE'
const  SET_TOTAL_USERS_COUNT = 'FRIENDS/SET-TOTAL-USERS-COUNT' 
const TOGGLE_IS_FETCHING = 'FRIENDS/TOGGLE-IS-FETCHING'
const FOLLOWING_PROGRESS = 'FRIENDS/FOLLOWING-PROGRESS'

export type InitialStateFriendsType = {
    users: Array<FriendsUsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingProgress: Array<number>
}

export type FriendsUsersType = {
    id: number
    name: string
    status: string
    photos: ProfileProfileInfoPhotosType
    followed: boolean
}

/////////////ActionTypes

export type FriendsActionsTypes = FollowActionType | UnfollowActionType | SetUsersActionType 
| SetCurrentPageActionType | SetTotalUsersCountActionType 
| ToggleIsFetchingCountActionType | ToggleFollowingProgressActionType

export type FriendsThunkType = ThunkAction<Promise<void>, AppStateType, unknown, FriendsActionsTypes>

export type FollowActionType = {
    type: typeof FOLLOW,
    id: number
}
export type UnfollowActionType = {
    type: typeof UNFOLLOW,
    id: number
}
export type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<FriendsUsersType>
}
export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalCount: number
}
export type ToggleIsFetchingCountActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export type ToggleFollowingProgressActionType = {
    type: typeof FOLLOWING_PROGRESS,
    followingProgress: Array<number>,
    userID: number
}