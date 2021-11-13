import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, requeiredField } from "../../../../../../utils/validator/validators"
import { Textarea } from "../../../../../Common/FormsStyles/FormControls"
import './PostForm.css'

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
    
    const onSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit()
        props.reset()
    }

    return (
        <form className="create-post" onSubmit = {onSubmit} >
            <Field className="input-post" component = {Textarea} name = {'newPost'} validate = {[requeiredField, maxLength10]} />
            <button className="btn-send post__btn" >Send</button>
        </form>
    )
}

export const PostReduxForm = reduxForm({form: 'post'}) (PostForm)
