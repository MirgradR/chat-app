import './ChatSMS.css'
import ava from '../../../../../Rlogo.png'
import { ChatSMSPropsType } from '../../../../../types/MessagesTypes/MessagesTypesComponent';

const ChatSMS: React.FC<ChatSMSPropsType> = (props) => {
    return (
        <li className = "chat-message">
            <img src = {ava} alt = {ava} className = "avatar logo chat-message__avatar"/>
            <h3 className = "chat-message__login">{props.user}</h3>
            <p className = "chat-message__text">{props.text}</p>
        </li>
    );
}

export default ChatSMS