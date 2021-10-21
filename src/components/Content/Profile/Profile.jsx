import PostContainer from './Post/PostContainer';
import Pro from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => { 
    
    return (
        <div className={Pro.profile}>
            <ProfileInfo profileInfo = {props.profileInfo} props = {props} />
            <PostContainer />    
        </div>   
    );   
}

export default Profile