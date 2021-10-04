import './Chat.css'
import ChatSMS from './ChatSMS/ChatSMS';

const Chat = (props) => {
    const users = props.users
    const sms = props.sms
    const chatItems = sms.map(elem => {
        return <ChatSMS users = {users[0].name}  text = {elem.text} key = {elem.id}/>
    })
    return (
        <div className = "chat messages__chat">
            {chatItems}
        </div>
    );
}
export default Chat