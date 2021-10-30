import { friendsAPI} from "../api/api"

const FOLLOW = 'FRIENDS/FOLLOW'
const UNFOLLOW = 'FRIENDS/UNFOLLOW'
const SET_USERS = 'FRIENDS/SET-USERS'
const SET_CURRENT_PAGE = 'FRIENDS/SET-CURRENT-PAGE'
const  SET_TOTAL_USERS_COUNT = 'FRIENDS/SET-TOTAL-USERS-COUNT' 
const TOGGLE_IS_FETCHING = 'FRIENDS/TOGGLE-IS-FETCHING'
const FOLLOWING_PROGRESS = 'FRIENDS/FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
};

const updateObjectInArray = (items, itemID, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[objPropName] === itemID) {
            return {...u, ...newObjProps}
        }
        return u
    })
}

export const friendsReducer = (state = initialState, action) => {
    
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

export const followAC = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}
export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setTotalUsersCountAC = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
}
export const toggleIsFetchingCountAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}
export const toggleFollowingProgressAC = (followingProgress, userID) => {
    return {
        type: FOLLOWING_PROGRESS,
        followingProgress: followingProgress,
        userID: userID
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingCountAC(true))
        let data = await friendsAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetchingCountAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUsersCountAC(data.totalCount))
    }
}

const followUnfollow = async (dispatch, userID, actionCreator, apiMethon) => {
    dispatch(toggleFollowingProgressAC(true, userID))
    let data = await apiMethon(userID)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleFollowingProgressAC(false, userID))
}

export const followUserThunkCreator = (userID) => {
    return async (dispatch) => {
        followUnfollow(dispatch, userID, followAC, friendsAPI.followUser.bind(friendsAPI))
    }
}

export const unFollowUserThunkCreator = (userID) => {
    return async (dispatch) => {
        followUnfollow(dispatch, userID, unfollowAC, friendsAPI.unFollowUser.bind(friendsAPI))
    }
}



