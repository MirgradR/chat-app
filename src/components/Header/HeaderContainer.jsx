import React from 'react'
import './Header.css'
import Header from './Header'
import { connect } from 'react-redux'
import { logout, setUserData} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {

    componentDidMount() {
        
        this.props.setUserData(this.props.auth.isAuth)

    }

    render() {
        return (
            <Header auth = {this.props.auth} logout = {this.props.logout} />
        )
    }

}

let mapStateToProps = (state) => ({
    auth: state.auth
})



export default connect(mapStateToProps, {setUserData: setUserData, logout: logout}) (HeaderContainer)
