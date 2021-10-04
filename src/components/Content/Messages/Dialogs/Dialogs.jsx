import './Dialogs.css'
import DialogsList from './DialogsList/DialogsList';

const Dialogs = (props) => {  
    return (
        <div className="dialogs messages__dialogs">
            <h2 className = "dialogs-title">Dialogs</h2>
            <DialogsList users = {props.users}/>
        </div>
    );
}
export default Dialogs