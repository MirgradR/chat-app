import './Post.css'
import CreatePost from './PostCreateForm/PostCreateForm';
import PostList from './PostList/PostList';

const Post = (props) => {
    return (
        <div className="post profile__post">
            <h3 className="post__title">My posts</h3>
            <CreatePost dispatch = {props.dispatch} newPost = {props.posts.newPostText}/>
            <PostList posts = {props.posts.postUsers}/>
            
        </div>
    );
}
export default Post