import { Route } from 'react-router';
import './Content.css'
import Friends from './Friends/Friends';
import Messages from './Messages/Messages';
import Profile from './Profile/Profile';

const Content = (props) => {
    const profile = props.state.state
    return (
        <div className="content wrapper__content">
            <Route exact
                path = '/Profile' 
                render = { () => <Profile {...profile.profileData} />}  
            />
            <Route
                path='/Messages'
                render = { () => <Messages {...profile.messagesData} dispatch = {props.dispatch} store = {props.store} />}
            />   
            <Route
                path='/Friends'
                render={() => <Friends />}
            />
        </div>
    );
}
export default Content