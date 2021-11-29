export type LoginMapStateToProps = {
    captchaUrl: string | null
    isAuth: boolean 
}
export type LoginMapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean, captcha: any) => void
    logout: () => void
}
export type LoginFormValuesTypes = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}
export type LoginFormOwnProps = {
    captchaUrl: string | null
}

export type LoginFormValuesTypeKeys = keyof LoginFormValuesTypes