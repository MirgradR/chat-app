import React from 'react'
import './Header.css'
import Header from './Header'
import { connect } from 'react-redux'
import { logout, setUserData} from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'
import { HeaderContainerPropsType, HeaderMapStatePropsType } from '../../types/HeaderTypes/HeaderTypes'

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {     
        this.props.setUserData(this.props.auth.isAuth)
    }

    render() {
        return (
            <Header auth = {this.props.auth} logout = {this.props.logout} navigation = {this.props.navigation} />
        )
    }
}

let mapStateToProps = (state: AppStateType): HeaderMapStatePropsType => ({
    auth: state.auth,
    navigation: state.navigation.navigation
})

export default connect(mapStateToProps, {setUserData: setUserData, logout: logout}) (HeaderContainer)