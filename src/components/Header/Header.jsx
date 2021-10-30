import { NavLink } from 'react-router-dom';
import logo from '../../Rlogo.png'
import './Header.css'

const Header = (props) => {
    
    return (
        <header className="header wrapper__header">
            <img className="logo header__logo" src={logo} alt="logo" />
            {props.auth.isAuth 
            ? <div><span className = {'header__login-login'}>{props.auth.login}</span> <span onClick = {props.logout} className = {'header__login-logout'}>&#10060;</span></div> 
            : <NavLink to = '/Content/Login/' className = 'header__login-userName'>{'Login'}</NavLink>}
            
        </header>
    );
}
export default Header