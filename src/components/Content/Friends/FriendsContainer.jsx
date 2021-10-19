import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../../redux/friends-reducer";
import FriendsClass from "./Friends";
import './Friends.css'

const mapStateToProps = (state) => {
    return {
        users: state.friendsData.users,
        pageSize: state.friendsData.pageSize,
        totalUsersCount: state.friendsData.totalUsersCount,
        currentPage: state.friendsData.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (id) => {
            dispatch(followAC(id))
        },
        unfollowUser: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps) (FriendsClass)

export default FriendsContainer
