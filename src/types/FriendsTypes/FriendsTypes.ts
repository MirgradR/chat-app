import { friendsActions } from './../../redux/friends-reducer';
import { ProfileProfileInfoPhotosType } from "../ProfileTypes/ProfileTypes"
import { InferActionsTypes } from '../commonTypes';

export type FriendsFilterTermType = {
    term: string
    friend: boolean | null
}

export type InitialStateFriendsType = {
    users: Array<FriendsUsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingProgress: Array<number>,
    filter: FriendsFilterTermType
}

export type FriendsUsersType = {
    id: number
    name: string
    status: string
    photos: ProfileProfileInfoPhotosType
    followed: boolean
}

/////////////ActionTypes

export type FriendsActionTypes = InferActionsTypes<typeof friendsActions>