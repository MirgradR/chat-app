import { ChangeEvent } from 'react'
import logo from '../../../../Rlogo.png'
import { ProfileInfoPropsType } from '../../../../types/ProfileTypes/ProfileTypesComponent'
import Preloader from '../../../Common/Preloader/Preloader'
import './ProfileInfo.css'
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHOOKS'

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    
    const profile = props.profileInfo

    if (!profile) {
        return <Preloader />
    }
 
    let item
    let contactsArr = []
    for (let key in profile.contacts) {
        if (profile.contacts[key] !== null && profile.contacts[key] !== '') {
            item = key + ': ' + profile.contacts[key]
            contactsArr.push(item)
        }     
    }
    let contacts = contactsArr.map(c => {
        return <h3 className="personal-info__item" key={Math.floor(Math.random() * 1000)}>{c}</h3>
    })
    
    const changeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className='profile-info'>
            <div className = {'profile-info__avatar'}>
                <img src={profile.photos.small ? profile.photos.small : logo} alt="logo" className="logo avatar profile__avatar" />
                {!props.isOwner && (
                    <div className={'change-avatar'}>
                        <label htmlFor = {'file'} className={'change-avatar__element'}>Change The Photo</label>
                        <input type={'file'} className={'change-avatar__input'} onChange={changeAvatar} id = {'file'} />
                    </div>
                )}
            </div>
            <div className="personal-info profile__info">
                <h3 className="personal-info__item" key = {Math.floor(Math.random()*1000)}>{profile.fullName}</h3>
                <ProfileStatusHooks isOwner = {props.isOwner} status ={props.status} updateStatus = {props.updateStatus} />
                <h3 className="personal-info__item" key = {Math.floor(Math.random()*1000)}>{profile.lookingForAJob ? 'I am looking for a job' : 'I have a job'}</h3>
                <h3 className="personal-info__item" key = {Math.floor(Math.random()*1000)}>{profile.lookingForAJobDescription && profile.lookingForAJobDescription }</h3>
                <div className = 'personal-info__item-contacts'>
                   {contacts}    
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo