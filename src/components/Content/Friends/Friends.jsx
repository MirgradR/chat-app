import './Friends.css'
import FriendsItem from './FriendsItem/FriendsItem'

const Friends = () => {
    return (
        <div className = 'friends content__friends'>
            <ul className = 'friends__list'>
                <FriendsItem />
                <FriendsItem />
                <FriendsItem />
            </ul>
        </div> 
    )
}

export default Friends