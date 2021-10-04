import { NavLink } from 'react-router-dom';
import './MenuItem.css'

const MenuItem = (props) => {
    return (
        <NavLink to = {props.link} className = "menu-item sidebar__item">{props.item}</NavLink>
    );
}
export default MenuItem