import { connect } from 'react-redux';
import { addMessageActionCreator } from '../../../redux/messages-reducer';
import Messages from './Messages';
import './Messages.css'

const mapStateToProps = (state) => {
    return {
        usersList: state.messagesData.usersList,
        chatSMS: state.messagesData.chatSMS
    }  
}

const MessagesContainer = connect(mapStateToProps, {addMessage: addMessageActionCreator}) (Messages)

export default MessagesContainer