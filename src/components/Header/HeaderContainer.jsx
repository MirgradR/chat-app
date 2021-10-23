import React from 'react'
import './Header.css'
import Header from './Header'
import { connect } from 'react-redux'
import { setUserDataAC } from '../../redux/auth-reducer'
import { getProfileAuth } from '../../api/api'


class HeaderContainer extends React.Component {

    componentDidMount() {

        getProfileAuth().then(data => {
                const userInfo = data.data
                if (data.resultCode === 0) {
                    this.props.auth.isAuth = true
                }
                
                this.props.setUserData(userInfo.id, userInfo.email, userInfo.login)
            })
    }

    render() {
        return (
            <Header auth = {this.props.auth} setUserData = {this.props.setUserData} />
        )
    }

}

let mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps, {setUserData: setUserDataAC}) (HeaderContainer)
