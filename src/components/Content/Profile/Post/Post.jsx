import './Post.css'
import CreatePost from './PostCreateForm/PostCreateForm';
import PostList from './PostList/PostList';

const Post = (props) => {
    return (
        <div className="post profile__post">
            <h3 className="post__title">My posts</h3>
            <CreatePost/>
            <PostList posts = {props.posts}/>
        </div>
    );
}
export default Post