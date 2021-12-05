import axios from "axios";
import {  AuthDataType, AuthLoginDataType, FriendsApiGetUsersResponseType, GetCaptchaApiResponseType, PhotosFromApi, ResponseType } from "../types/APITypes/ApiTypes";
import { ProfileProfileInfoType } from "../types/ProfileTypes/ProfileTypes";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e936cc93-ffd1-4fe3-841e-539754d0802a'
    }
})

export const friendsAPI = {
    followUser(userID: number) {
        return instance.post<ResponseType>(`follow/${userID}`, null).then(data => data.data)
    },
    unFollowUser(userID: number) {
        return instance.delete<ResponseType>(`follow/${userID}`).then(data => data.data)
    },
    getUsers(currentPage: number, pageSize: number, term: string = '', friend: boolean | null = null) {
        return instance.get<FriendsApiGetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`)).then(data => data.data)
    }
}

export const authAPI = {
    loginAuth (email: string, password: string, rememberMe = false, captcha: null | string = null ) {
        return instance.post<ResponseType<AuthLoginDataType>>(`auth/login`, { email, password, rememberMe, captcha }).then(data => data.data)
    },
    logoutAuth () {
        return instance.delete<ResponseType>(`auth/login`).then(data => data.data)
    },
    getProfileAuth () {
        return instance.get<ResponseType<AuthDataType>>(`auth/me`).then(data => data.data)
    }
}

export const profileAPI = {
    getProfileInfo(userID: number) {
        return instance.get<ResponseType<ProfileProfileInfoType>>(`profile/` + userID)//.then(data =>  data) //.data
    },
    getStatus(userID: number) {
        return instance.get<string>(`profile/status/` + userID).then(data => data.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status: status}).then(data => data)
    },
    savePhoto(file: File) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put<ResponseType<PhotosFromApi>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(data => data.data)
    },
    saveProfileInfo(newProfile: ProfileProfileInfoType) {
        newProfile.aboutMe = newProfile.fullName
        const formData = JSON.stringify(newProfile)
        return instance.put<ResponseType>(`profile`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaApiResponseType>('security/get-captcha-url')
    }
}
