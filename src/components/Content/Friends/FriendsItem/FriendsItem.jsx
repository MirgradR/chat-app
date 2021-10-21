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
                {props.users.followed
                    ? <button onClick={unfollowUser} className='list-item__following'>Unfollow</button>
                    : <button onClick={followUser} className='list-item__following'>Follow</button>
                }
                <div className='list-item__description'>
                    <h2 className='description-login'>{props.users.name}</h2>
                    <div className='description-location'>
                        <h4 className='description-location__country'>
                            {/* {'props.users.location.country'} */}
                        </h4>
                        <h4 className='description-location__city'>
                            {/* {'props.users.location.city'}  */}
                        </h4>
                    </div>
                    <p className='description-greeting'>{props.users.status}</p>
                </div>
            </NavLink>
        </li>
    )
}
export default FriendsItem