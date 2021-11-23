const ADD_POST = 'PROFILE/ADD-POST'
const SET_PROFILE_INFO = 'PROFILE/SET-PROFILE-INFO'
const GET_STATUS = 'PROFILE/GET-STATUS'
const UPDATE_PHOTO = 'PROFILE/UPDATE-PHOTO'

export type ProfilePostUsersType = {
    post: string, 
    id: number, 
    likes: number, 
    name: string
}

export type InitialStateProfileType = {
    postUsers: Array<ProfilePostUsersType>
    profileInfo: ProfileProfileInfoType | null,
    isFetching: boolean,
    status: string
}

export type ProfileProfileInfoContactsType = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}
export type ProfileProfileInfoPhotosType = {
    small?: string | null
    large?: string | null
}
export type ProfileProfileInfoType = {
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: ProfileProfileInfoContactsType
    photos?: ProfileProfileInfoPhotosType
}

////////// ActionsTypes

export type AddPostActionType = {
    type: typeof ADD_POST,
    newPost: string
}
export type SetProfileInfoActionType = {
    type: typeof SET_PROFILE_INFO,
    profileInfo: ProfileProfileInfoType
}
export type GetProfileStatusActionType = {
    type: typeof GET_STATUS,
    status: string
}
export type updatePhotoActionType = {
    type: typeof UPDATE_PHOTO,
    photo: string
}