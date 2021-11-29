import { ProfileProfileInfoPhotosType } from "../ProfileTypes/ProfileTypes"

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type ResponseType<D = {}> = {
    data: D
    resultCode: ResultCodesEnum
    messages: Array<string>
}

//Friends
export type FriendsUsersType = {
    name: string,
    id: number,
    photos: ProfileProfileInfoPhotosType,
    status: string,
    followed: boolean
}
export type FriendsApiGetUsersResponseType = {
    items: Array<FriendsUsersType>
    totalCount: number,
    error: null | string
}

//Auth

export type AuthDataType = {
    id: number,
    email: string, 
    login: string
}
export type AuthLoginDataType = {
    userId: number
}

//Profile

export type PhotosFromApi = {
    photos: ProfileProfileInfoPhotosType
}

// Security

export type GetCaptchaApiResponseType = {
    url: string
}