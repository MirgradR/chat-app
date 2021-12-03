import { profileActions } from './../../redux/profile-reducer';
import { InferActionsTypes } from '../commonTypes';

export type ProfilePostUsersType = {
    post: string, 
    id: number, 
    likes: number, 
    name: string
}
 
export type InitialStateProfileType = {
    postUsers: Array<ProfilePostUsersType>
    profileInfo: ProfileProfileInfoType | null
    isFetching: boolean,
    status: string
}

export type ProfileProfileInfoContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    [index: string]: string
}

export type ProfileProfileInfoPhotosType = {
    small: string
    large: string
}
// | null
export type ProfileProfileInfoType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileProfileInfoContactsType
    photos: ProfileProfileInfoPhotosType
    aboutMe: string
}

////////// ActionsTypes

export type ProfileActionsTypes = InferActionsTypes<typeof profileActions>
