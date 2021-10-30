import './PostCreate.css'
import React from 'react'
import { PostReduxForm } from './PostForm/PostForm'

const CreatePost = (props) => {

    const onSubmit = (formData) => {
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