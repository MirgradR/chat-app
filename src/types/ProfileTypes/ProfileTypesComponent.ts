import { RouteComponentProps } from 'react-router';
import { setUserDataActionPayloadType } from '../AuthTypes/AuthTypes';
import { ProfilePostUsersType, ProfileProfileInfoType } from './ProfileTypes';

export type PostFormPropsType = {
    newPost: string
}

export type PostCreatePropsType = {
    addPost: (newPost: string) => void
}

export type PostItemPropsType = {
    login: string
    text: string
    likes: number
}

export type PostListPropsType = {
    posts: Array<ProfilePostUsersType>
}
export type ProfileInfoPropsType = {
    profileInfo: ProfileProfileInfoType | null
    updateStatus: (status: string) => void 
    status: string
    savePhoto: (file: File) => void
    isOwner: string
}

export type ProfileStatusPropsType = {
    updateStatus: (status: string) => void 
    status: string
    isOwner: string
}
 
export type ProfilePropsType = ProfileInfoPropsType & PostCreatePropsType & PostListPropsType

export type ProfileContainerPropsType =  ProfileMapStatePropsType & ProfileMapDispatchPropsType & ProfileOwnPropsType & RouteComponentProps<PathParamsType>

export type ProfileMapStatePropsType = {
    profileInfo: ProfileProfileInfoType | null
    auth: setUserDataActionPayloadType
    status: string
    posts: Array<ProfilePostUsersType>
}
export type ProfileMapDispatchPropsType = {
    setProfileInfo: (userID: number | null, myProfile: number) => void,
    getProfileStatus: (userID: number, myProfile: number) => void,
    updateProfileStatus: (status: string) => void
    addPost: (newPost: string) => void
    savePhoto: (file: File) => void
}
export type ProfileOwnPropsType = { prop?: any }

export type PathParamsType = {
    userId: string
}


