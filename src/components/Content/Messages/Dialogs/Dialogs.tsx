import { DialogsPropsType } from '../../../../types/MessagesTypes/MessagesTypesComponent';
import './Dialogs.css'
import DialogsList from './DialogsList/DialogsList';

const Dialogs: React.FC<DialogsPropsType> = (props) => {  
    return (
        <div className="dialogs messages__dialogs">
            <h2 className = "dialogs-title">Dialogs</h2>
            <DialogsList users = {props.users}/>
        </div>
    );
}
export default Dialogs