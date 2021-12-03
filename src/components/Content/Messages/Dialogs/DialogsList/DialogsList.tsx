import { DialogsPropsType } from '../../../../../types/MessagesTypes/MessagesTypesComponent';
import DialogsItem from './DialogsItem/DialogsItem';
import './DialogsList.css'

const DialogsList: React.FC<DialogsPropsType> = (props) => {
    const user = props.users
    const dialogItems = user.map(elem => {
        return <DialogsItem user = {elem.name} idU = {elem.id} key = {elem.id}/>
    })
    return (
        <ul className="dialogs-list">
            {dialogItems}
        </ul>
    );
}
export default DialogsList