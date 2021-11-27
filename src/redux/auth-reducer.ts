import { stopSubmit } from "redux-form"
import { authAPI, securityAPI } from "../api/api"
import { AuthActionsTypes, getCaptchaUrlActionType, getCaptchaUrlType, InitialStateAuthType } from "../types/AuthTypes/AuthTypes"

const SET_USER_DATA = 'AUTH/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCSESS = 'AUTH/GET-CAPTCHA-URL-SUCCSESS'

let initialState: InitialStateAuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}


export const authReducer = (state = initialState, action: any): InitialStateAuthType => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state, 
                ...action.data
            }
        case GET_CAPTCHA_URL_SUCCSESS:
            return {
                ...state, captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}

export const setUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
}

export const getCaptchaUrlActionCreator = (captchaUrl: getCaptchaUrlType): getCaptchaUrlActionType => {
    return {
        type: GET_CAPTCHA_URL_SUCCSESS,
        captchaUrl: captchaUrl
    }
}
export const setUserData = () => {
    return async (dispatch: any) => {
        let data = await authAPI.getProfileAuth()
        const userInfo = data.data
        if (data.resultCode === 0) {
            dispatch(setUserDataAC(userInfo.id, userInfo.email, userInfo.login, true))
        }
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => {
    return async (dispatch: any) => {
        let data: any = await authAPI.loginAuth(email, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch(setUserData())
        } else {
            
            if (data.resultCode === 10) {
               dispatch(getCaptchaUrl()) 
            }
            let messageError = data.messages.length > 0 ? data.messages[0] : 'The Login or Password is incorrect'
            dispatch(stopSubmit('login', { _error: messageError }))
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: any) => {
        let data: any = await securityAPI.getCaptchaUrl()
        const captchaUrl = data.data.url
        dispatch(getCaptchaUrlActionCreator(captchaUrl))
    }
}

export const logout = () => {
    return async (dispatch: any) => {
        let data: any = await authAPI.logoutAuth()
        if (data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
        }
    }
}
