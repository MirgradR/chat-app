import { LoginReduxForm } from "./LoginForm/LoginForm"

const Login = (props) => {

    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={props.onSubmit} />
        </div>
    )
}

export default Login