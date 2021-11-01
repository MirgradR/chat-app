import { LoginReduxForm } from "./LoginForm/LoginForm"

const Login = (props) => {

    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={props.onSubmit} captchaUrl = {props.captchaUrl}/>
        </div>
    )
}

export default Login