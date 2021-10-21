import logo from '../../../../Rlogo.png'
import Preloader from '../../../Common/Preloader/Preloader'
import './ProfileInfo.css'
const ProfileInfo = (props) => {
    const profile = props.profileInfo
    
    if (!profile) {
        return <Preloader />
    }

    let item
    let contactsArr = []
    for (let key in profile.contacts) {
        if (profile.contacts[key] !== null) {
            item = key + ': ' + profile.contacts[key]
            contactsArr.push(item)
        }     
    }
    let contacts = contactsArr.map(c => {
        return <h3 className="personal-info__item" key={Math.floor(Math.random() * 1000)}>{c}</h3>
    })
    // profile.photos.small ? profile.photos.small : 
    return (
        <div className='profile-info'>
            <img src={profile.photos.small ? profile.photos.small : logo} alt="logo" className="logo avatar profile__avatar" />
            <div className="personal-info profile__info">
                <h3 className="personal-info__item" key = {Math.floor(Math.random()*1000)}>{profile.fullName}</h3>
                <h3 className="personal-info__item" key = {Math.floor(Math.random()*1000)}>{profile.aboutMe}</h3>
                <h3 className="personal-info__item" key = {Math.floor(Math.random()*1000)}>{profile.lookingForAJob ? 'I am looking for a job' : 'I have a job'}</h3>
                <div className = 'personal-info__item-contacts'>
                   {contacts} 
                   
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo


// const profileInfo = profile.map(elem => {
//     let item
//     for (let key in elem) {
//         item = key + ': ' + elem[key]
//     }
//     return <h3 className="personal-info__item" key = {Math.floor(Math.random()*1000)}>{item}</h3>
// })