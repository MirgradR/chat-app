import { ProfileProfileInfoPhotosType, ProfileProfileInfoType } from "../ProfileTypes/ProfileTypes"

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
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
export type FriendsApiFollowResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
export type FriendsApiUnfollowResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
//Auth

export type AuthApiResponseType = {
    data: { id: number, email: string, login: string}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
export type AuthApiLoginResponseType = {
    data: { userId: number}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
export type AuthApiLogoutResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

//Profile

export type ProfileInfoApiResponseType = {
    data: ProfileProfileInfoType
    resultCode: ResultCodesEnum
    messages: Array<string>
}
export type ProfileStatusUpdateApiResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
export type ProfilePhotoUpdateApiResponseType = {
    data: ProfileProfileInfoPhotosType
    resultCode: ResultCodesEnum
    messages: Array<string>
    
}
export type ProfileSaveInfoApiResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}