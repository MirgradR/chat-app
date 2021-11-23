import { stopSubmit } from "redux-form"
import { profileAPI } from "../api/api"
import { AddPostActionType, GetProfileStatusActionType, InitialStateProfileType, ProfileProfileInfoType, updatePhotoActionType } from '../types/ProfileTypes/ProfileTypes';

const ADD_POST = 'PROFILE/ADD-POST'
const SET_PROFILE_INFO = 'PROFILE/SET-PROFILE-INFO'
const GET_STATUS = 'PROFILE/GET-STATUS'
const UPDATE_PHOTO = 'PROFILE/UPDATE-PHOTO'

let initialState: InitialStateProfileType = {
    postUsers: [
        { post: 'Hi girls', id: 1, likes: 23, name: 'Jenya' },
        { post: 'wow man', id: 2, likes: 12, name: 'Jorik' },
        { post: 'How are you', id: 3, likes: 5, name: 'Roma' },
        { post: 'Haha', id: 4, likes: 8, name: 'Masha' },
        { post: 'Haha', id: 5, likes: 3, name: 'Igor' }
    ],
    profileInfo: null,
    isFetching: false,
    status: ''
}

export const profileReducer = (state = initialState, action: any): InitialStateProfileType => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = action.newPost
            return {
                ...state,
                postUsers: [...state.postUsers, {post: newPost, id: 6, likes: 0, name: 'Ruslan'}]
            }
        case SET_PROFILE_INFO:
            return {
                ...state, profileInfo: action.profileInfo
            }
        case GET_STATUS:
            return {
                ...state, status: action.status
            }
        case UPDATE_PHOTO:
            return {
                ...state, profileInfo: {...state.profileInfo, photos: action.photo}
            }
        default: 
            return state 
    }
}


export const addPostActionCreator = (newPost: string): AddPostActionType => {
    return {
        type: ADD_POST,
        newPost: newPost
    }
}

export const setProfileInfoAC = (profileInfo: InitialStateProfileType) => {
    return {
        type: SET_PROFILE_INFO,
        profileInfo: profileInfo,
    }
}

export const getProfileStatusAC = (status: string): GetProfileStatusActionType => {
    return {
        type: GET_STATUS,
        status: status
    }
}

export const updatePhotoActionCreator = (photo: string): updatePhotoActionType => {
    return {
        type: UPDATE_PHOTO,
        photo: photo
    }
}

export const setProfileInfoThunkCreator = (userID: number, myProfile: number) => {
    return async (dispatch: any) => {
        let showUserByID = userID
        if (!showUserByID) {
            showUserByID = myProfile
        }
        let data: any = await profileAPI.getProfileInfo(showUserByID)
        dispatch(setProfileInfoAC(data))
    }
}

export const getProfileStatusThunkCreator = (userID: number, myProfile: number) => {
    return async (dispatch: any) => {
        let showUserByID = userID
        if (!showUserByID) {
            showUserByID = myProfile
        }
        let data: any = await profileAPI.getStatus(showUserByID)
        dispatch(getProfileStatusAC(data))
    }
}
export const updateProfileStatusThunkCreator = (status: string) => {
    return async (dispatch: any) => {
        let data: any = await profileAPI.updateStatus(status)
        if (data.data.resultCode === 0) {
            dispatch(getProfileStatusAC(status))
        }
    }
}

export const savePhotoThunkCreator = (file: any) => {
    return async (dispatch: any) => {
        let data: any = await profileAPI.savePhoto(file)
        if (data.data.resultCode === 0) {
            dispatch(updatePhotoActionCreator(data.data.data.photos))
        }
    }
}

export const saveProfileInfoThunkCreator = (newProfile: ProfileProfileInfoType) => {
    return async (dispatch: any, getState: any) => {
        const userID = getState().auth.userId
        let data: any = await profileAPI.saveProfileInfo(newProfile)
        if (data.data.resultCode === 0) {
            dispatch(setProfileInfoThunkCreator(userID, 0))
        } else {
            let messageError = data.data.messages.length > 0 ? data.data.messages[0] : 'error'
            dispatch(stopSubmit('settings', { _error: messageError }))  
            return Promise.reject(messageError)      
        }
    }
}

