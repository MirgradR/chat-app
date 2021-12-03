import React from 'react';
import { ChatPropsType } from '../../../../types/MessagesTypes/MessagesTypesComponent';
import './Chat.css'
import { ChatReduxForm } from './ChatForm/ChatForm';
import ChatSMS from './ChatSMS/ChatSMS';

const Chat: React.FC<ChatPropsType> = (props) => {

    const addMessage = (FormData: { newMessage: string }) => {
        if (FormData.newMessage) {
            props.addMessage(FormData.newMessage)
        }       
    }

    const chatItems = props.chatSMS.map(elem => {
        return <ChatSMS user = {'Ruslan'}  text = {elem.text} key = {elem.id}/>    
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