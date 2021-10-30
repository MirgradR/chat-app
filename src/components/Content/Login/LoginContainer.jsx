import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"
import { login, logout } from "../../../redux/auth-reducer"
import Login from "./Login"

class LoginContainer extends React.Component {

    onSubmit = (formData) => {
        this.props.login(formData.login, formData.password, formData.rememberMe)
    }
    render() {
        if (this.props.isAuth) {
            return <Redirect to = {'/content/profile'} />
        }
        return (
            <Login onSubmit = {this.onSubmit} props = {this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const FriendsContainer = connect(mapStateToProps, {login: login, logout: logout} ) (LoginContainer)
export default FriendsContainer