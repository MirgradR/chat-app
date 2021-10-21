import { Route } from 'react-router';
import './Content.css'
import FriendsContainer from './Friends/FriendsContainer';
import Messages from './Messages/Messages';
import ProfileContainer from './Profile/ProfileContainer';

const Content = (props) => {
    const profile = props.state.state
    return (
        <div className="content wrapper__content">
            <Route 
                path = '/Content/Profile/:userId?' 
                render = { () => <ProfileContainer />}  
            />
            <Route
                path='/Content/Messages'
                render = { () => <Messages {...profile.messagesData} dispatch = {props.dispatch} store = {props.store} />}
            />   
            <Route
                path='/Content/Friends'
                render={() => <FriendsContainer />}
            />
        </div>
    );
}
export default Content