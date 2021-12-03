import { PostListPropsType } from '../../../../../types/ProfileTypes/ProfileTypesComponent';
import PostItem from './PostItem/PostItem';
import './PostList.css'

const PostList: React.FC<PostListPropsType> = (props) => {
    
    const postUsers = props.posts
    
    const postItems = postUsers.map(elem => {
        return <PostItem login={elem.name} text = {elem.post} likes = {elem.likes} key = {elem.id}/>
    })
    return (
        <div className="post-list profile__post-list">
            {postItems}
        </div>
    );
}
export default PostList