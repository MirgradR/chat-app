import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import Navigation from './Navigation'
import './Navigation.css'

export type NavigationContainerStatePropsType = {
    navigation: Array<string>
}

const NavigationContainer: React.FC<NavigationContainerStatePropsType> = (props) => {
    return (
        <Navigation navigation = {props.navigation} />
    )
}

const mapPropsToState = (state: AppStateType): NavigationContainerStatePropsType => {
    return {
        navigation: state.navigation.navigation
    }
}

export default connect(mapPropsToState) (NavigationContainer)