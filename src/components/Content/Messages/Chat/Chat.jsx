import React from 'react';
import './Chat.css'
import { ChatReduxForm } from './ChatForm/ChatForm';
import ChatSMS from './ChatSMS/ChatSMS';

const Chat = (props) => {

    const addMessage = (FormData) => {
        if (FormData.newMessage) {
            props.addMessage(FormData.newMessage)
        }       
    }

    const chatItems = props.chatSMS.map(elem => {
        return <ChatSMS users = {'Ruslan'}  text = {elem.text} key = {elem.id}/>    
    })
    return (
        <div className = "chat messages__chat">
            {chatItems}
            <div className = "chat__create-message">
                <ChatReduxForm onSubmit = {addMessage} />
            </div>
        </div>
    );
}
export default Chat