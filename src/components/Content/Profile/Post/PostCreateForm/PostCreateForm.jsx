import './PostCreateForm.css'
import React from 'react'

const CreatePost = (props) => {
    let inputText = React.createRef()

    const addPost = () => {
        if (inputText.current.value) {
            props.addPost()
        }
    }

    const newPostText = () => {
        props.newPostText(inputText.current.value)
    }
    
    return (
        <form className="create-post">
            <textarea type="text" value = {props.newPostValue} onChange = {newPostText} className="input-post" ref = {inputText}/>
            <button type = 'button' className="btn-send post__btn" onClick = {addPost}>Send</button>
        </form>
    );
}
export default CreatePost