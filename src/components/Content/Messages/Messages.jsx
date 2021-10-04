import Chat from './Chat/Chat';
import Dialogs from './Dialogs/Dialogs';
import './Messages.css'

const Messages = (props) => {
    const data = props
    return (
        <div className = "messages content__messages">
            <Dialogs users = {data.usersList}/>
            <Chat users = {data.usersList} sms = {data.chatSMS}/>
        </div>
    );
}
export default Messages