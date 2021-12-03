import { setUserDataActionPayloadType } from "../AuthTypes/AuthTypes"

export type HeaderPropsType = {
    auth: setUserDataActionPayloadType 
    logout: () => void
    navigation: Array<string>
}
export type HeaderContainerPropsType = HeaderMapStatePropsType & HeaderMapDispatchPropsType

export type HeaderMapStatePropsType = {
    auth: setUserDataActionPayloadType 
    navigation: Array<string>
}
export type HeaderMapDispatchPropsType = {
    logout: () => void
    setUserData: (isAuth: boolean) => void    
}