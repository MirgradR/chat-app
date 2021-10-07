import { Route } from 'react-router';
import './Content.css'
import Messages from './Messages/Messages';
import Profile from './Profile/Profile';

const Content = (props) => {
    const profile = props.data.data
    return (
        <div className="content wrapper__content">
            <Route exact
                path = '/Profile' 
                render = { () => <Profile {...profile.profileData} dispatch = {props.dispatch}/>}  
            />
            <Route
                path='/Messages'
                render = { () => <Messages {...profile.messagesData} dispatch = {props.dispatch}/>}
            />    
        </div>
    );
}
export default Content