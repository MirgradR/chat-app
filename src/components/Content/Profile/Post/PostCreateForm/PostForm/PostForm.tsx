import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { PostFormPropsType } from "../../../../../../types/ProfileTypes/ProfileTypesComponent"
import { maxLengthCreator, requeiredField } from "../../../../../../utils/validator/validators"
import { Textarea } from "../../../../../Common/FormsStyles/FormControls"
import './PostForm.css'

const maxLength10 = maxLengthCreator(10)

const PostForm: React.FC<InjectedFormProps<PostFormPropsType>> = (props) => {

    return (
        <form className="create-post" onSubmit = {props.handleSubmit} >
            <Field className="input-post" component = {Textarea} name = {'newPost'} validate = {[requeiredField, maxLength10]} />
            <button className="btn-send post__btn" >Send</button>
        </form>
    )
}

export const PostReduxForm = reduxForm<PostFormPropsType>({form: 'post'}) (PostForm)
