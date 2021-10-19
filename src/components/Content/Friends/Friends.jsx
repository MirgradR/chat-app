import './Friends.css'
import FriendsItem from './FriendsItem/FriendsItem'
import * as axios from 'axios'
import React from 'react'

class Friends extends React.Component {
    
    componentDidMount() {
        if (this.props.users.length === 0) { 
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(data => {
                    this.props.setUsers(data.data.items)
                    this.props.setTotalUsersCount(data.data.totalCount)
                })
        }
    }

    setCurrentPage = (p) => {
        this.props.setCurrentPage(p)
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then(data => {
            console.log(data)
            this.props.setUsers(data.data.items)
            
            
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        if (this.props.currentPage > 1) {
            pages.push(1)
            if (this.props.currentPage > 2) {
               pages.push(this.props.currentPage - 1) 
            } 
        }
        for (let i = this.props.currentPage; i <= pagesCount; i++) {
            if (i < 9) {
                pages.push(i)  
            }
        }
        if (this.props.currentPage >= 8) {
            if (this.props.currentPage < pagesCount) {
                if (this.props.currentPage !== 8) {
                    pages.push(this.props.currentPage)    
                }
                pages.push(this.props.currentPage + 1)
            }   
        }
        if (this.props.currentPage !== pagesCount - 1) {
            pages.push(pagesCount)
        }
        

        return (
            <div className = 'friends content__friends'>
                <div className = 'pagination-pages'>
                    {pages.map(p => { 
                        return <button className = {this.props.currentPage === p 
                            ? 'pagination-pages__value selected' 
                            : 'pagination-pages__value'}
                            onClick = {() => {this.setCurrentPage(p)}} >
                                {p}
                            </button>
                    })}
                </div>
                <ul className='friends__list'>
                    {this.props.users.map(s => {
                        return <FriendsItem users={s}
                            followUser={this.props.followUser}
                            unfollowUser={this.props.unfollowUser}
                            setUsers={this.props.setUsers}
                            key={s.id} />
                    })}
                </ul>
            </div> 
        )
    }
}

export default Friends