const SET_USER_DATA = 'AUTH/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCSESS = 'AUTH/GET-CAPTCHA-URL-SUCCSESS'

export type InitialStateAuthType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}


export type setUserDataActionPayloadType = {
    userId: number | null, 
    email: string | null, 
    login: string | null, 
    isAuth: boolean
}

export type setUserDataActionType = {
    type: typeof SET_USER_DATA
    data: setUserDataActionPayloadType
}

export type getCaptchaUrlType = {
    captchaUrl: string
}

export type getCaptchaUrlActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCSESS
    captchaUrl: getCaptchaUrlType
}