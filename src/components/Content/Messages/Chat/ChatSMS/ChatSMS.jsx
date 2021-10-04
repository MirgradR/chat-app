import './ChatSMS.css'
import ava from '../../../../../Rlogo.png'

const ChatSMS = (props) => {
    return (
        <li className = "chat-message">
            <img src = {ava} alt = {ava} className = "avatar logo chat-message__avatar"/>
            <h3 className = "chat-message__login">{props.users}</h3>
            <p className = "chat-message__text">{props.text}</p>
        </li>
    );
}

export default ChatSMS