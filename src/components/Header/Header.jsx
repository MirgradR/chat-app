import { NavLink } from 'react-router-dom';
import logo from '../../Rlogo.png'
import './Header.css'

const Header = (props) => {
    
    return (
        <header className="header wrapper__header">
            <img className="logo header__logo" src={logo} alt="logo" />
            <NavLink to = '/Login/' className = 'header__login'>{props.auth.isAuth ? props.auth.login : 'Login'}</NavLink>
        </header>
    );
}
export default Header