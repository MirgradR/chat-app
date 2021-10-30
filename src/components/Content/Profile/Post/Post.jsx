import './Post.css'
import PostList from './PostList/PostList';
import CreatePost from './PostCreateForm/PostCreate';

const Post = (props) => {
    
    return (
        <div className="post profile__post">
            <h3 className="post__title">My posts</h3>
            <CreatePost addPost = {props.addPost} /> 
            <PostList posts = {props.posts}/>        
        </div>
    );
}
export default Post