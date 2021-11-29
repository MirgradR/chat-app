import { authActions } from "../../redux/auth-reducer"
import { InferActionsTypes } from "../commonTypes"

export type InitialStateAuthType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: null | string 
}
export type setUserDataActionPayloadType = {
    userId: number | null, 
    email: string | null, 
    login: string | null, 
    isAuth: boolean
}

export type AuthActionTypes = InferActionsTypes<typeof authActions>