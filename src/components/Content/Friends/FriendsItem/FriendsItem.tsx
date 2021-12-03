import './FriendsItem.css'
import avatar from './../../../../Rlogo.png'
import { NavLink } from 'react-router-dom'
import React from 'react'
import { FriendsItemPropsType } from '../../../../types/FriendsTypes/FriendsTypesComponent'

const FriendsItem: React.FC<FriendsItemPropsType> = (props) => {
    
    const followUser = () => {
        props.followUser(props.user.id)
    }

    const unfollowUser = () => {
        props.unfollowUser(props.user.id)
    }

    return (
        <li className='friends__list-item'>
            <NavLink to = {'/Content/Profile/' + props.user.id}>
                <img src={props.user.photos.small ? props.user.photos.small : avatar} alt='avatar' className='logo avatar' />
                <div className='list-item__description'>
                    <h2 className='description-login'>{props.user.name}</h2>
                    <div className = {'location'}></div>
                    <p className='description-greeting'>{props.user.status}</p>
                </div>
            </NavLink>
            {props.user.followed
                    ? <button disabled = {props.followingProgress.some(id => id === props.user.id)} onClick={unfollowUser} className='list-item__following'>Unfollow</button>
                    : <button disabled = {props.followingProgress.some(id => id === props.user.id)} onClick={followUser} className='list-item__following'>Follow</button>
                }
        </li>
    )
}
export default FriendsItem
