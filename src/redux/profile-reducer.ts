import { FormAction, stopSubmit } from "redux-form"
import { profileAPI } from "../api/api"
import { ResultCodesEnum } from "../types/APITypes/ApiTypes";
import { ThunkType } from "../types/commonTypes";
import { InitialStateProfileType, ProfileActionsTypes, ProfileProfileInfoPhotosType, ProfileProfileInfoType } from '../types/ProfileTypes/ProfileTypes';

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

export const profileReducer = (state = initialState, action: ProfileActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        case 'PROFILE/ADD-POST': 
            let newPost = action.newPost
            return {
                ...state,
                postUsers: [...state.postUsers, {post: newPost, id: 6, likes: 0, name: 'Ruslan'}]
            }
        case 'PROFILE/SET-PROFILE-INFO':
            return {
                ...state, profileInfo: action.profileInfo
            }
        case 'PROFILE/GET-STATUS':
            return {
                ...state, status: action.status
            }
        case 'PROFILE/UPDATE-PHOTO':
            return {
                ...state, profileInfo: {...state.profileInfo, photos: action.photo} as ProfileProfileInfoType
            }
        default: 
            return state 
    }
} 

export const profileActions = {
    addPostActionCreator: (newPost: string) => {
        return {
            type: 'PROFILE/ADD-POST',
            newPost: newPost
        } as const
    },
    setProfileInfoAC: (profileInfo: ProfileProfileInfoType) => {
        return {
            type: 'PROFILE/SET-PROFILE-INFO',
            profileInfo: profileInfo,
        } as const
    },
    getProfileStatusAC: (status: string) => {
        return {
            type: 'PROFILE/GET-STATUS',
            status: status
        } as const
    },
    updatePhotoActionCreator: (photo: ProfileProfileInfoPhotosType) => {
        return {
            type: 'PROFILE/UPDATE-PHOTO',
            photo: photo
        } as const
    },
}

export const setProfileInfoThunkCreator = (userID: number | null, myProfile: number ): ThunkType<ProfileActionsTypes> => {
    return async (dispatch) => {
        let showUserByID = userID
        if (!showUserByID) {
            showUserByID = myProfile
        }
        let data:any = await profileAPI.getProfileInfo(showUserByID)
        dispatch(profileActions.setProfileInfoAC(data.data)) 
    }
}

export const getProfileStatusThunkCreator = (userID: number, myProfile: number): ThunkType<ProfileActionsTypes> => {
    return async (dispatch) => {
        let showUserByID = userID
        if (!showUserByID) {
            showUserByID = myProfile
        }
        let data = await profileAPI.getStatus(showUserByID)
        dispatch(profileActions.getProfileStatusAC(data))
    }
}
export const updateProfileStatusThunkCreator = (status: string): ThunkType<ProfileActionsTypes> => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.data.resultCode === ResultCodesEnum.Success) {
            dispatch(profileActions.getProfileStatusAC(status))
        }
    }
}

export const savePhotoThunkCreator = (file: File): ThunkType<ProfileActionsTypes> => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(profileActions.updatePhotoActionCreator(data.data.photos))
        }
    }
}

export const saveProfileInfoThunkCreator = (newProfile: ProfileProfileInfoType): ThunkType<ProfileActionsTypes | FormAction> => {
    return async (dispatch, getState) => {
        const userID = getState().auth.userId
        let data = await profileAPI.saveProfileInfo(newProfile)
        
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(setProfileInfoThunkCreator(userID, 0))
        } else {
            let messageError = data.messages.length > 0 ? data.messages[0] : 'error'
            dispatch(stopSubmit('settings', { _error: messageError }))  
            return Promise.reject(messageError)      
        }
    }
}


