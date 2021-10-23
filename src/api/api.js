import axios from "axios";
import { API_KEY } from "../redux/redux-store";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': API_KEY
    }
})

export const followUserAPI = (userID) => {
    return instance.post(`follow/${userID}`, null).then(data => data.data)
}

export const unFollowUserAPI = (userID) => {
    return instance.delete(`follow/${userID}`).then(data => data.data)
}

export const getProfileAuth = () => {
    return instance.get(`auth/me`).then(data => data.data)
}

export const getProfileInfo = (userID) => {
    return instance.get(`profile/` + userID).then(data => data.data)
}

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(data => data.data)
}
