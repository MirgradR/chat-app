import ChatContainer from './Chat/ChatContainer';
import Dialogs from './Dialogs/Dialogs';
import './Messages.css'

const Messages = (props) => {
    const data = props
    return (
        <div className = "messages content__messages">
            <Dialogs users = {data.usersList}/>
            <ChatContainer store = {props.store} />
        </div>
    );
}
export default Messages