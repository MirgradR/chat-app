import axios from "axios";
import { AuthApiLoginResponseType, AuthApiLogoutResponseType, AuthApiResponseType, FriendsApiFollowResponseType, FriendsApiGetUsersResponseType, FriendsApiUnfollowResponseType, ProfileInfoApiResponseType, ProfileSaveInfoApiResponseType, ProfileStatusUpdateApiResponseType } from "../types/APITypes/ApiTypes";
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
        return instance.post<FriendsApiFollowResponseType>(`follow/${userID}`, null).then(data => data.data)
    },
    unFollowUser(userID: number) {
        return instance.delete<FriendsApiUnfollowResponseType>(`follow/${userID}`).then(data => data.data)
    },
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<FriendsApiGetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(data => data.data)
    }
}

export const authAPI = {
    loginAuth (email: string, password: string, rememberMe = false, captcha: null | string = null ) {
        return instance.post<AuthApiLoginResponseType>(`auth/login`, { email, password, rememberMe, captcha }).then(data => data.data)
    },
    logoutAuth () {
        return instance.delete<AuthApiLogoutResponseType>(`auth/login`).then(data => data.data)
    },
    getProfileAuth () {
        return instance.get<AuthApiResponseType>(`auth/me`).then(data => data.data)
    }
}

export const profileAPI = {
    getProfileInfo(userID: number) {
        return instance.get<ProfileInfoApiResponseType>(`profile/` + userID).then(data => data.data)
    },
    getStatus(userID: number) {
        return instance.get<string>(`profile/status/` + userID).then(data => data.data)
    },
    updateStatus(status: string) {
        return instance.put<ProfileStatusUpdateApiResponseType>(`profile/status`, {status: status}).then(data => data)
    },
    savePhoto(file: any) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(data => data.data)
    },
    saveProfileInfo(newProfile: ProfileProfileInfoType) {
        newProfile.aboutMe = newProfile.fullName
        const formData = JSON.stringify(newProfile)
        return instance.put<ProfileSaveInfoApiResponseType>(`profile`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}
