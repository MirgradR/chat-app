import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Rlogo.png'
import { HeaderPropsType } from '../../types/HeaderTypes/HeaderTypes';
import MenuBurger from '../MenuBurger/MenuBurger';
import './Header.css'

const Header: React.FC<HeaderPropsType> = (props) => {
    
    const [activeMenu, setActiveMenu] = useState(false)

    const setActive = () => {
        setActiveMenu(!activeMenu)
    }
    
    return (
        <header className="header wrapper__header">
            <div onClick = {setActive} className = {activeMenu ? 'burger-menu active' : 'burger-menu'}>
                <div className = {'burger-menu__item'}></div>
            </div>
            {activeMenu && <MenuBurger navigation = {props.navigation}/>}
            <img className="logo header__logo" src={logo} alt="logo" />
            {props.auth.isAuth 
            ? <div><span className = {'header__login-login'}>{props.auth.login}</span> <span onClick = {props.logout} className = {'header__login-logout'}>&#10060;</span></div> 
            : <NavLink to = '/Content/Login/' className = 'header__login-userName'>{'Login'}</NavLink>}
            
        </header>
    );
}
export default Header