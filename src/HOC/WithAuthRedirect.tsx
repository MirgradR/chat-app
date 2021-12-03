import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"
import { AppStateType } from "../redux/redux-store"

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

type WithAuthPropsType = {isAuth: boolean}

export function WithAuthRedirect<WCP> (Component: React.ComponentType<WCP>) { 

    const RedirectComponent: React.FC<WithAuthPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to='/Content/Login' />
        }
        return <Component {...restProps as unknown as WCP} />
    }

    let ConnectedAuthRedirectComponent = connect<WithAuthPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent
}
