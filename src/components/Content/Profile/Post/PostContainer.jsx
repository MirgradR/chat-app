import './Post.css'
import { addPostActionCreator } from '../../../../redux/profile-reducer'
import { connect } from 'react-redux'
import Post from './Post'

const mapStateToProps = (state) => {
    return {
        posts: state.profileData.postUsers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost))
        },
    }
}
const PostContainer = connect(mapStateToProps, mapDispatchToProps) (Post)

export default PostContainer