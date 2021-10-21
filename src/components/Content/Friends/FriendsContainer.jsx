import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingCountAC, unfollowAC } from "../../../redux/friends-reducer";
import * as axios from 'axios'
import React from 'react'
import Friends from './Friends'
import Preloader from "../../Common/Preloader/Preloader";

class FriendsAPI extends React.Component {
    
    componentDidMount() { 
            this.props.toggleIsFetchingCount(true)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(data => {
                    this.props.toggleIsFetchingCount(false)
                    this.props.setUsers(data.data.items)
                    this.props.setTotalUsersCount(data.data.totalCount)
                    
                })
    }

    setCurrentPage = (p) => {
        this.props.toggleIsFetchingCount(true)
        this.props.setCurrentPage(p)
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then(data => {
            this.props.toggleIsFetchingCount(false)
            this.props.setUsers(data.data.items)   
        })
    }
    
    render() {
        return   (
            <div>
                {this.props.isFetching ? <Preloader/> : <Friends
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.setCurrentPage}
                    users={this.props.users}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    setUsers={this.props.setUsers} />}

            </div>

            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.friendsData.users,
        pageSize: state.friendsData.pageSize,
        totalUsersCount: state.friendsData.totalUsersCount,
        currentPage: state.friendsData.currentPage,
        isFetching: state.friendsData.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         followUser: (id) => {
//             dispatch(followAC(id))
//         },
//         unfollowUser: (id) => {
//             dispatch(unfollowAC(id))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetchingCount: (isFetching) => {
//             dispatch(toggleIsFetchingCountAC(isFetching))
//         }
//     }
// }

const FriendsContainer = connect(mapStateToProps, {
    followUser: followAC,
    unfollowUser: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetchingCount: toggleIsFetchingCountAC
    }) (FriendsAPI)

export default FriendsContainer
