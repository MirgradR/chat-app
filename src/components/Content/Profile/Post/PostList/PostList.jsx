import PostItem from './PostItem/PostItem';
import './PostList.css'

const PostList = () => {
    return (
        <div className="post-list profile__post-list">
            <PostItem login='Mirgrad' text = 'Hey, i am here.'/>
            <PostItem login='IT-Boss' text = 'Hi, how are you?'/>
            <PostItem login='Jorick' text = 'And I!'/>
        </div>
    );
}
export default PostList