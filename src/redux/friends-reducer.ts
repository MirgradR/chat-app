import { friendsAPI} from "../api/api"
import { FollowActionType, FriendsUsersType, InitialStateFriendsType, SetCurrentPageActionType, SetTotalUsersCountActionType, SetUsersActionType, ToggleFollowingProgressActionType, ToggleIsFetchingCountActionType, UnfollowActionType } from "../types/FriendsTypes/FriendsTypes"

const FOLLOW = 'FRIENDS/FOLLOW'
const UNFOLLOW = 'FRIENDS/UNFOLLOW'
const SET_USERS = 'FRIENDS/SET-USERS'
const SET_CURRENT_PAGE = 'FRIENDS/SET-CURRENT-PAGE'
const  SET_TOTAL_USERS_COUNT = 'FRIENDS/SET-TOTAL-USERS-COUNT' 
const TOGGLE_IS_FETCHING = 'FRIENDS/TOGGLE-IS-FETCHING'
const FOLLOWING_PROGRESS = 'FRIENDS/FOLLOWING-PROGRESS'

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

export const friendsReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: updateObjectInArray(state.users, action.id, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state, 
                users: updateObjectInArray(state.users, action.id, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users:  [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage} 
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case FOLLOWING_PROGRESS: 
            return {...state, 
                followingProgress: action.followingProgress
                    ? [...state.followingProgress, action.userID]
                    : state.followingProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

export const followAC = (id: number): FollowActionType => {
    return {
        type: FOLLOW,
        id: id
    }
}
export const unfollowAC = (id: number): UnfollowActionType => {
    return {
        type: UNFOLLOW,
        id: id
    }
}
export const setUsersAC = (users: Array<FriendsUsersType>): SetUsersActionType => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setTotalUsersCountAC = (totalCount: number): SetTotalUsersCountActionType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
}
export const toggleIsFetchingCountAC = (isFetching: boolean): ToggleIsFetchingCountActionType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}
export const toggleFollowingProgressAC = (followingProgress: any, userID: number): ToggleFollowingProgressActionType => {
    return {
        type: FOLLOWING_PROGRESS,
        followingProgress: followingProgress,
        userID: userID
    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetchingCountAC(true))
        let data: any = await friendsAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetchingCountAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUsersCountAC(data.totalCount))
    }
}

const followUnfollow = async (dispatch: any, userID: number, actionCreator: any, apiMethon: any) => {
    dispatch(toggleFollowingProgressAC(true, userID))
    let data = await apiMethon(userID)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleFollowingProgressAC(false, userID))
}

export const followUserThunkCreator = (userID: number) => {
    return async (dispatch: any): Promise<void> => {
        followUnfollow(dispatch, userID, followAC, friendsAPI.followUser.bind(friendsAPI))
    }
}

export const unFollowUserThunkCreator = (userID: number) => {
    return async (dispatch: any): Promise<void> => {
        followUnfollow(dispatch, userID, unfollowAC, friendsAPI.unFollowUser.bind(friendsAPI))
    }
}



