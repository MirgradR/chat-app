import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'AUTH/SET-USER-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state, 
                ...action.data
            }
        default:
            return state
    }
}

export const setUserDataAC = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
}

export const setUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.getProfileAuth()
        const userInfo = data.data
        if (data.resultCode === 0) {
            dispatch(setUserDataAC(userInfo.id, userInfo.email, userInfo.login, true))
        }
    }
}
export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.loginAuth(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(setUserData())
        }
        else {
            let messageError = data.data.messages.length > 0 ? data.data.messages[0] : 'The Login or Password is incorrect'
            dispatch(stopSubmit('login', { _error: messageError }))
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logoutAuth()
        if (data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
        }
    }
}

