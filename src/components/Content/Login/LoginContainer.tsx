import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"
import { login, logout } from "../../../redux/auth-reducer"
import { AppStateType } from "../../../redux/redux-store"
import { LoginFormValuesTypes, LoginMapDispatchToProps, LoginMapStateToProps } from "../../../types/LoginTypes/LoginTypes"
import { LoginReduxForm } from "./LoginForm/LoginForm"

const Login: React.FC<LoginMapStateToProps & LoginMapDispatchToProps> = (props) => {

    const onSubmit = (formData: LoginFormValuesTypes) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/content/profile'} />
    }
    return (
        <LoginReduxForm onSubmit={onSubmit} captchaUrl = {props.captchaUrl}/>
    )
}

const mapStateToProps = (state: AppStateType): LoginMapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

const LoginContainer = connect(mapStateToProps, {login: login, logout: logout} ) (Login)
export default LoginContainer 