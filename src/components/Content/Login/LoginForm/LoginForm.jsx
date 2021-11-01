import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requeiredField } from '../../../../utils/validator/validators'
import { Input } from '../../../Common/FormsStyles/FormControls'
import './LoginForm.css'
import '../../../Common/FormsStyles/FormControls.css'

const maxLength25 = maxLengthCreator(25)

export const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    
    return (
        <form onSubmit = {handleSubmit} className = 'login-form'>
            <Field className = 'login-form__login' placeholder={'Login'} component = {Input} name = {'login'} validate = {[requeiredField, maxLength25]} />
            <Field className = 'login-form__password' placeholder={'Password'} component = {Input} name = {'password'} type = {'password'} validate = {[requeiredField, maxLength25]} />
            <div className = 'form-rememberMe'>
                <Field className = 'login-form__rememberMe-checkbox' type={'checkbox'} component = {Input} name = {'rememberMe'} /> 
                <p className = 'login-form__rememberMe-title'>Remember me</p>
            </div>
            { error && <div className={'form-login-error'}><p>{error}</p></div> }
            {captchaUrl &&
                <div className={'form-login-captcha'}>
                    <img src={captchaUrl} alt = {'captcha'} />
                    <Field className = {'input-captcha'} component = {Input} name = {'captcha'} validate = {[requeiredField]}/>
                </div>
            }
            <button className = 'btn-login'>Login</button>
        </form>
    )
}
export const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)