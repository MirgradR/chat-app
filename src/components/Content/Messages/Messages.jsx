import Chat from './Chat/Chat';
import Dialogs from './Dialogs/Dialogs';
import './Messages.css'

const Messages = (props) => {
    
    return (
        <div className = "messages content__messages">
            <Dialogs users = {props.usersList}/>
            <Chat chatSMS = {props.chatSMS} addMessage = {props.addMessage} />
        </div>
    );
}
export default Messages

