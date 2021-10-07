import logo from '../../../Rlogo.png'
import Post from './Post/Post';
import Pro from './Profile.module.css'

const Profile = (props) => { 
    const profile = props
    const profileInfo = profile.profileInfo.map(elem => {
        let item
        for (let key in elem) {
            item = key + ': ' + elem[key]
        }
        return <h3 className="personal-info__item" key = {Math.floor(Math.random()*1000)}>{item}</h3>
    })
    return (
        <div className={Pro.profile}>
            <img src={logo} alt="logo" className="logo avatar profile__avatar" />
            <div className="personal-info profile__info">
                {profileInfo}
            </div>
            <Post posts = {profile} dispatch = {props.dispatch}/>    
        </div>   
    );   
}

export default Profile