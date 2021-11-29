import { friendsActions } from './../../redux/friends-reducer';
import { ThunkAction } from "redux-thunk"
import { AppStateType } from "../../redux/redux-store"
import { ProfileProfileInfoPhotosType } from "../ProfileTypes/ProfileTypes"
import { InferActionsTypes } from '../commonTypes';

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

export type FriendsActionTypes = InferActionsTypes<typeof friendsActions>