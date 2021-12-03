import './Post.css'
import PostList from './PostList/PostList';
import CreatePost from './PostCreateForm/PostCreate';
import { PostCreatePropsType, PostListPropsType } from '../../../../types/ProfileTypes/ProfileTypesComponent';

const Post: React.FC<PostListPropsType & PostCreatePropsType> = (props) => {
    
    return (
        <div className="post profile__post">
            <h3 className="post__title">My posts</h3>
            <CreatePost addPost = {props.addPost} /> 
            <PostList posts = {props.posts}/>        
        </div>
    );
}
export default Post