import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, requeiredField } from "../../../../../utils/validator/validators"
import { Textarea } from "../../../../Common/FormsStyles/FormControls"

const maxLength50 = maxLengthCreator(50)

const ChatForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit} >
            <Field className="input-message" component = {Textarea} name = {'newMessage'} validate = {[requeiredField, maxLength50]}  />
            <button className="btn-send message__btn">Send</button>
        </form>
    )
}

export const ChatReduxForm = reduxForm({form: 'chat'}) (ChatForm)
