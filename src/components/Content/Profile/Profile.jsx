import logo from '../../../Rlogo.png'
import Post from './Post/Post';
import Pro from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className={Pro.profile}>
            <img src={logo} alt="logo" className="logo avatar profile__avatar" />
            <div className="personal-info profile__info">
                <h2 className="personal-info__login">Login: {props.login}</h2>
                <h3 className="personal-info__city">City: {props.city}</h3>
                <h3 className="personal-info__birthD"> Birthday: {props.birth}</h3>
                <h3 className="personal-info__edu"> Education: {props.edu}</h3>
            </div>
            <Post/>
        </div>
    );
}

export default Profile