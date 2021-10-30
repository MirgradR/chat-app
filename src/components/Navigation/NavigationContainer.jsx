import { connect } from 'react-redux'
import Navigation from './Navigation'
import './Navigation.css'

const mapPropsToState = (state) => {
    return {
        navigation: state.navigation.navigation
    }
}

const NavigationContainer = connect(mapPropsToState, null) (Navigation)

export default NavigationContainer