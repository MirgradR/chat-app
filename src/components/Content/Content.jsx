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
                render = { (props) => <Profile {...profile.profileData}/>}  
            />
            <Route
                path='/Messages'
                render = { (props) => <Messages {...profile.messagesData}/>}
            />    
        </div>
    );
}
export default Content