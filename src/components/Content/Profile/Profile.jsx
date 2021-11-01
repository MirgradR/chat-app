import Post from './Post/Post';
import Pro from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => { 
    
    return (
        <div className={Pro.profile}>
            <ProfileInfo profileInfo = {props.profileInfo} updateStatus = {props.updateStatus} status = {props.status} savePhoto = {props.savePhoto} isOwner = {props.isOwner} />
            <Post  addPost = {props.addPost} posts = {props.posts} />    
        </div>   
    );   
}

export default Profile