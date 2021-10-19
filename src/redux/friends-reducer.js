const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const  SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT' 

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
};

export const friendsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(s => {
                    if (s.id === action.id) {
                        return {...s, followed: true}
                    }
                    return s
                })
            }
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(s => {
                    if (s.id === action.id) {
                        return {...s, followed: false}
                    }
                    return s
                })
            }
        case SET_USERS:
            return {...state, users:  [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage} 
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
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

