import './PostCreateForm.css'
import React from 'react'
import { addPostActionCreator, newPostTextActionCreator } from '../../../../../redux/state'

const CreatePost = (props) => {
    let inputText = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
        inputText.current.value = ''
    }

    const newPostText = () => {
        props.dispatch(newPostTextActionCreator(inputText.current.value)) 
    }
    
    return (
        <form className="create-post">
            <textarea type="text" value = {props.newPostText} onChange = {newPostText} className="input-post" ref = {inputText}/>
            <button type = 'button' className="btn-send post__btn" onClick = {addPost}>Send</button>
        </form>
    );
}
export default CreatePost