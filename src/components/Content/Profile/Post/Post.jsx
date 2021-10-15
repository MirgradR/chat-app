import './Post.css'
import PostList from './PostList/PostList';
import CreatePost from './PostCreateForm/PostCreateForm';

const Post = (props) => {
    return (
        <div className="post profile__post">
            <h3 className="post__title">My posts</h3>
            <CreatePost addPost = {props.addPost} newPostText = {props.newPostText}  newPostValue = {props.newPostValue} /> 
            <PostList posts = {props.posts}/>
            
        </div>
    );
}
export default Post