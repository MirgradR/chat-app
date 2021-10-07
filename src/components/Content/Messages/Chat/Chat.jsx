import React from 'react';
import { addMessageActionCreator, newMessageTextActionCreator } from '../../../../redux/state';
import './Chat.css'
import ChatSMS from './ChatSMS/ChatSMS';

const Chat = (props) => {
    let inputMessage = React.createRef()

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
        inputMessage.current.value = ''
    }

    const newMessageText = () => {
        props.dispatch(newMessageTextActionCreator(inputMessage.current.value))
    }

    const users = props.data.usersList
    const sms = props.data.chatSMS

    const chatItems = sms.map(elem => {
        return <ChatSMS users = {users[0].name}  text = {elem.text} key = {elem.id}/>    
    })
    return (
        <div className = "chat messages__chat">
            {chatItems}
            <div className = "chat__create-message">
                <textarea onChange = {newMessageText} ref = {inputMessage} type="text" className="input-message" />
                <button onClick = {addMessage} className="btn-send message__btn">Send</button>
            </div>
        </div>
    );
}
export default Chat