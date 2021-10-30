import FriendsItem from "./FriendsItem/FriendsItem"
import './Friends.css'
import { Pagination } from "./Pagination/Pagination"

const Friends = (props) => {
    
    return (
        <div className = 'friends content__friends'>
                <Pagination totalUsersCount = {props.totalUsersCount}
                    pageSize = {props.pageSize}
                    currentPage = {props.currentPage}
                    setCurrentPage = {props.setCurrentPage}
                />
                <ul className='friends__list'>
                    {props.users.map(s => {
                        return <FriendsItem users={s}
                            followUser={props.followUser}
                            unfollowUser={props.unfollowUser}
                            setUsers={props.setUsers}
                            key={s.id}
                            followingProgress = {props.followingProgress}  />
                    })}
                </ul>
            </div> 
    )
}
export default Friends