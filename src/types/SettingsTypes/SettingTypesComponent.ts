import { ProfileProfileInfoType } from "../ProfileTypes/ProfileTypes";

export type SettingFormValuesPropsType = ProfileProfileInfoType
export type SettingsFormOvnPropsType = {
    initialValues: ProfileProfileInfoType | null
}
export type SettingsPropsType = {
    profileInfo: ProfileProfileInfoType | null
    onSubmit: (formData: ProfileProfileInfoType) => void
}

export type SettingsContainerPropsType = SettingsMapStatePropsType & SettingsMapDispatchPropsType & SettingsMapOwnPropsType

export type SettingsMapStatePropsType = {
    isAuth: boolean
    profileInfo: ProfileProfileInfoType | null
}
export type SettingsMapDispatchPropsType = {
    saveProfile: (newProfile: ProfileProfileInfoType) => Promise<any>
}
export type SettingsMapOwnPropsType = {
    prop?: any
}