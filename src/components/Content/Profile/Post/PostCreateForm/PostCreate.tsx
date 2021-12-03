import './PostCreate.css'
import React from 'react'
import { PostReduxForm } from './PostForm/PostForm'
import { PostCreatePropsType, PostFormPropsType } from '../../../../../types/ProfileTypes/ProfileTypesComponent'

const CreatePost: React.FC<PostCreatePropsType> = (props) => {

    const onSubmit = (formData: PostFormPropsType) => {     
        if (formData.newPost) {
            props.addPost(formData.newPost)  
        }   
    }
    
    return (
        <div className="create-post">
            <PostReduxForm onSubmit={onSubmit} />
        </div>
    );
}
export default CreatePost