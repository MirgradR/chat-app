import { ResultCodesEnum } from './../types/APITypes/ApiTypes';
import { Dispatch } from "react"
import { friendsAPI} from "../api/api"
import { ThunkType } from "../types/commonTypes";
import { FriendsActionTypes, FriendsUsersType, InitialStateFriendsType } from "../types/FriendsTypes/FriendsTypes"

let initialState: InitialStateFriendsType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
};

const updateObjectInArray = (items: Array<FriendsUsersType>, itemID: number, objPropName: string, newObjProps: any) => {
    return items.map((u: any) => {
        if (u[objPropName] === itemID) {
            return {...u, ...newObjProps}
        }
        return u
    })
}

export const friendsReducer = (state = initialState, action: FriendsActionTypes) => {   
    switch (action.type) {
        case 'FRIENDS/FOLLOW':
            return {
                ...state, 
                users: updateObjectInArray(state.users, action.id, 'id', {followed: true})
            }
        case 'FRIENDS/UNFOLLOW':
            return {
                ...state, 
                users: updateObjectInArray(state.users, action.id, 'id', {followed: false})
            }
        case 'FRIENDS/SET-USERS':
            return {...state, users:  [...action.users]}
        case 'FRIENDS/SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage} 
        case 'FRIENDS/SET-TOTAL-USERS-COUNT':
            return { ...state, totalUsersCount: action.totalCount }
        case 'FRIENDS/TOGGLE-IS-FETCHING':
            return { ...state, isFetching: action.isFetching }
        case 'FRIENDS/FOLLOWING-PROGRESS': 
            return {...state, 
                followingProgress: action.followingProgress
                    ? [...state.followingProgress, action.userID]
                    : state.followingProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

export const friendsActions = {
    followAC: (id: number) => {
        return {
            type: 'FRIENDS/FOLLOW',
            id: id
        } as const
    },
    unfollowAC: (id: number) => {
        return {
            type: 'FRIENDS/UNFOLLOW',
            id: id
        } as const
    },
    setUsersAC: (users: Array<FriendsUsersType>) => {
        return {
            type: 'FRIENDS/SET-USERS',
            users: users
        } as const
    },
    setCurrentPageAC: (currentPage: number) => {
        return {
            type: 'FRIENDS/SET-CURRENT-PAGE',
            currentPage: currentPage
        } as const
    },
    setTotalUsersCountAC: (totalCount: number) => {
        return {
            type: 'FRIENDS/SET-TOTAL-USERS-COUNT' ,
            totalCount: totalCount
        } as const
    },
    toggleIsFetchingCountAC: (isFetching: boolean) => {
        return {
            type: 'FRIENDS/TOGGLE-IS-FETCHING',
            isFetching: isFetching
        } as const
    },
    toggleFollowingProgressAC: (followingProgress: any, userID: number) => {
        return {
            type: 'FRIENDS/FOLLOWING-PROGRESS',
            followingProgress: followingProgress,
            userID: userID
        } as const
    },
}

const _followUnfollow = async (dispatch: Dispatch<FriendsActionTypes>, userID: number, actionCreator: (userId: number) => FriendsActionTypes, apiMethon: any) => {
    dispatch(friendsActions.toggleFollowingProgressAC(true, userID))
    let data = await apiMethon(userID)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userID))
    }
    dispatch(friendsActions.toggleFollowingProgressAC(false, userID))
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType<FriendsActionTypes> => {
    return async (dispatch) => {
        dispatch(friendsActions.toggleIsFetchingCountAC(true))
        let data = await friendsAPI.getUsers(currentPage, pageSize)
        dispatch(friendsActions.toggleIsFetchingCountAC(false))
        dispatch(friendsActions.setUsersAC(data.items))
        dispatch(friendsActions.setTotalUsersCountAC(data.totalCount))
    }
}

export const followUserThunkCreator = (userID: number): ThunkType<FriendsActionTypes> => {
    return async (dispatch): Promise<void> => {
        _followUnfollow(dispatch, userID, friendsActions.followAC, friendsAPI.followUser.bind(friendsAPI))
    }
}

export const unFollowUserThunkCreator = (userID: number): ThunkType<FriendsActionTypes> => {
    return async (dispatch): Promise<void> => {
        _followUnfollow(dispatch, userID, friendsActions.unfollowAC, friendsAPI.unFollowUser.bind(friendsAPI))
    }
}



