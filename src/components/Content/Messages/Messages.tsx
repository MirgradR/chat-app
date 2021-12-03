import { MessagesPropsType } from '../../../types/MessagesTypes/MessagesTypesComponent';
import Chat from './Chat/Chat';
import Dialogs from './Dialogs/Dialogs';
import './Messages.css'

const Messages: React.FC<MessagesPropsType> = (props) => {
    
    return (
        <div className = "messages content__messages">
            <Dialogs users = {props.usersList}/>
            <Chat chatSMS = {props.chatSMS} addMessage = {props.addMessage} />
        </div>
    );
}

export default Messages