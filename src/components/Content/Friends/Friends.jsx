import FriendsItem from "./FriendsItem/FriendsItem"
import './Friends.css'

const Friends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    if (props.currentPage > 1) {
        pages.push(1)
        if (props.currentPage > 2) {
           pages.push(props.currentPage - 1) 
        } 
    }
    for (let i = props.currentPage; i <= pagesCount; i++) {
        if (i < 9) {
            pages.push(i)  
        }
    }
    if (props.currentPage >= 8) {
        if (props.currentPage < pagesCount) {
            if (props.currentPage !== 8) {
                pages.push(props.currentPage)    
            }
            pages.push(props.currentPage + 1)
        }   
    }
    if (props.currentPage !== pagesCount - 1) {
        pages.push(pagesCount)
    }

    return (
        <div className = 'friends content__friends'>
                <div className = 'pagination-pages'>
                    {pages.map(p => { 
                        return <button className = {props.currentPage === p 
                            ? 'pagination-pages__value selected' 
                            : 'pagination-pages__value'}
                            onClick = {() => {props.setCurrentPage(p)}} >
                                {p}
                            </button>
                    })}
                </div>
                <ul className='friends__list'>
                    {props.users.map(s => {
                        return <FriendsItem users={s}
                            followUser={props.followUser}
                            unfollowUser={props.unfollowUser}
                            setUsers={props.setUsers}
                            key={s.id}
                            toggleFollowingProgress = {props.toggleFollowingProgress}
                            followingProgress = {props.followingProgress}  />
                    })}
                </ul>
            </div> 
    )
}
export default Friends