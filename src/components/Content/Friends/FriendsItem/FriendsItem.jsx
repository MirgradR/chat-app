import './FriendsItem.css'
import avatar from './../../../../Rlogo.png'
import { NavLink } from 'react-router-dom'

const FriendsItem = (props) => {
    
    const followUser = () => {
        props.followUser(props.users.id)
    }

    const unfollowUser = () => {
        props.unfollowUser(props.users.id)
    }

    return (
        <li className='friends__list-item'>
            <NavLink to = {'/Content/Profile/' + props.users.id}>
                <img src={props.users.photos.small ? props.users.photos.small : avatar} alt='avatar' className='logo avatar' />
                <div className='list-item__description'>
                    <h2 className='description-login'>{props.users.name}</h2>
                    <div className = {'location'}></div>
                    <p className='description-greeting'>{props.users.status}</p>
                </div>
            </NavLink>
            {props.users.followed
                    ? <button disabled = {props.followingProgress.some(id => id === props.users.id)} onClick={unfollowUser} className='list-item__following'>Unfollow</button>
                    : <button disabled = {props.followingProgress.some(id => id === props.users.id)} onClick={followUser} className='list-item__following'>Follow</button>
                }
        </li>
    )
}
export default FriendsItem


