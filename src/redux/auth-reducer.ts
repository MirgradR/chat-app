import { FormAction, stopSubmit } from "redux-form"
import { authAPI, securityAPI } from "../api/api"
import { ResultCodesEnum } from "../types/APITypes/ApiTypes"
import { AuthActionTypes, InitialStateAuthType } from "../types/AuthTypes/AuthTypes"
import { ThunkType } from "../types/commonTypes"

let initialState: InitialStateAuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state = initialState, action: AuthActionTypes) => {
    switch(action.type) {
        case 'AUTH/SET-USER-DATA':
            return {
                ...state, 
                ...action.data
            }
        case 'AUTH/GET-CAPTCHA-URL-SUCCSESS':
            return {
                ...state, captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}

export const authActions = {
    setUserDataAC: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
        return {
            type: 'AUTH/SET-USER-DATA',
            data: { userId, email, login, isAuth }
        } as const
    },
    getCaptchaUrlActionCreator: (captchaUrl: string) => {
        return {
            type: 'AUTH/GET-CAPTCHA-URL-SUCCSESS',
            captchaUrl: captchaUrl
        } as const
    }
}

export const setUserData = (): ThunkType<AuthActionTypes> => {
    return async (dispatch) => {
        let data = await authAPI.getProfileAuth()
        const userInfo = data.data
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(authActions.setUserDataAC(userInfo.id, userInfo.email, userInfo.login, true))
        }
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string): ThunkType<AuthActionTypes | FormAction> => {
    return async (dispatch) => {
        let data = await authAPI.loginAuth(email, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch(setUserData())
        } else {
            if (data.resultCode === ResultCodesEnum.CaptchaIsRequired) {
               dispatch(getCaptchaUrl()) 
            }
            let messageError = data.messages.length > 0 ? data.messages[0] : 'The Login or Password is incorrect'
            dispatch(stopSubmit('login', { _error: messageError }))
        }
    }
}

export const getCaptchaUrl = (): ThunkType<AuthActionTypes> => {
    return async (dispatch) => {
        let data = await securityAPI.getCaptchaUrl()
        const captchaUrl = data.data.url
        dispatch(authActions.getCaptchaUrlActionCreator(captchaUrl))
    }
}

export const logout = (): ThunkType<AuthActionTypes> => {
    return async (dispatch) => {
        let data = await authAPI.logoutAuth()
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(authActions.setUserDataAC(null, null, null, false))
        }
    }
}
