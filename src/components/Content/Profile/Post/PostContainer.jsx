import './Post.css'
import { addPostActionCreator, newPostTextActionCreator } from '../../../../redux/profile-reducer'
import { connect } from 'react-redux'
import Post from './Post'

const mapStateToProps = (state) => {
    return {
        newPostValue: state.profileData.newPostText,
        posts: state.profileData.postUsers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        newPostText: (text) => {
            dispatch(newPostTextActionCreator(text))
        }
    }
}
const PostContainer = connect(mapStateToProps, mapDispatchToProps) (Post)

export default PostContainer