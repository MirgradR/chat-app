import './DialogsItem.css'
import { NavLink } from 'react-router-dom';
import { DialogsItemPropsType } from '../../../../../../types/MessagesTypes/MessagesTypesComponent';

const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    const users = props.user
    const id = props.idU
    return (
        <NavLink to = {"/Content/Messages/" + id} className = "dialogs-list__item">{users}</NavLink>
    );
}
export default DialogsItem