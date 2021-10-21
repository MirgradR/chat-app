import './DialogsItem.css'
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    const users = props.user
    const id = props.idU
    return (
        <NavLink to = {"/Content/Messages/" + id} className = "dialogs-list__item">{users}</NavLink>
    );
}
export default DialogsItem