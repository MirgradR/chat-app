import { connect } from 'react-redux';
import { addMessageActionCreator, newMessageTextActionCreator } from '../../../../redux/messages-reducer';
import Chat from './Chat';
import './Chat.css'

const mapStateToProps = (state) => {

    return {
        newMessageValue: state.messagesData.newMessageText,
        data: state.messagesData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        newMessageText: (text) => {
            dispatch(newMessageTextActionCreator(text))
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps) (Chat)

export default ChatContainer