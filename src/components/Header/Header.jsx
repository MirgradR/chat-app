import logo from '../../Rlogo.png'
import './Header.css'

const Header = () => {
    return (
        <header className="header wrapper__header">
            <img className="logo header__logo" src={logo} alt="logo" />
        </header>
    );
}
export default Header