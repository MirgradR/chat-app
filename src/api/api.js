import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e936cc93-ffd1-4fe3-841e-539754d0802a'
    }
})


export const friendsAPI = {
    followUser(userID) {
        return instance.post(`follow/${userID}`, null).then(data => data.data)
    },
    unFollowUser(userID) {
        return instance.delete(`follow/${userID}`).then(data => data.data)
    },
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(data => data.data)
    }
}

export const authAPI = {
    loginAuth (email, password, rememberMe = false, captcha = null ) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha }).then(data => data.data)
    },
    logoutAuth () {
        return instance.delete(`auth/login`).then(data => data.data)
    },
    getProfileAuth () {
        return instance.get(`auth/me`).then(data => data.data)
    }
}


export const profileAPI = {
    getProfileInfo(userID) {
        return instance.get(`profile/` + userID).then(data => data.data)
    },
    getStatus(userID) {
        return instance.get(`profile/status/` + userID).then(data => data.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(data => data)
    },
    savePhoto(file) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfileInfo(newProfile) {
        newProfile.aboutMe = newProfile.fullName
        const formData = JSON.stringify(newProfile)
        return instance.put(`profile`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}
