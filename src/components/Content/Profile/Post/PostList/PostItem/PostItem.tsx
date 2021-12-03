import logo from '../../../../../../Rlogo.png'
import { PostItemPropsType } from '../../../../../../types/ProfileTypes/ProfileTypesComponent';
import './PostItem.css'

const PostItem: React.FC<PostItemPropsType> = (props) => {

    return (
        <div className="item-post post-list__item-post">
            <img src={logo} alt="logo" className="logo avatar item-post__avatar" />
            <h4 className="item-post__login">{props.login}</h4>
            <p className="item-post__text">{props.text}</p>
            <div className = "item-post__action">
               <p className = "item-post__likes-count">{props.likes}</p>
               <span className = "like-img">&#9829;</span> 
            </div>     
        </div>
    );
}
export default PostItem