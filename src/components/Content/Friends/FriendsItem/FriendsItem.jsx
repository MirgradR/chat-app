import './FriendsItem.css'
import avatar from './../../../../Rlogo.png'
import { NavLink } from 'react-router-dom'
import { followUserAPI, unFollowUserAPI } from '../../../../api/api'

const FriendsItem = (props) => {
    
    const followUser = () => {
        props.toggleFollowingProgress(true, props.users.id)
        followUserAPI(props.users.id).then(data => {
            if (data.resultCode === 0) {
                props.followUser(props.users.id)
            }
            props.toggleFollowingProgress(false, props.users.id)
        })
    }

    const unfollowUser = () => {
        props.toggleFollowingProgress(true, props.users.id)
        unFollowUserAPI(props.users.id).then(data => {
            if (data.resultCode === 0) {
               props.unfollowUser(props.users.id) 
            }
            props.toggleFollowingProgress(false, props.users.id)
        })  
        
    }

    return (
        <li className='friends__list-item'>
            <NavLink to = {'/Content/Profile/' + props.users.id}>
                <img src={props.users.photos.small ? props.users.photos.small : avatar} alt='avatar' className='logo avatar' />
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
            {props.users.followed
                    ? <button disabled = {props.followingProgress.some(id => id === props.users.id)} onClick={unfollowUser} className='list-item__following'>Unfollow</button>
                    : <button disabled = {props.followingProgress.some(id => id === props.users.id)} onClick={followUser} className='list-item__following'>Follow</button>
                }
        </li>
    )
}
export default FriendsItem


