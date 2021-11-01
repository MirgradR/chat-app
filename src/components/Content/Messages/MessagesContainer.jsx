import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../../HOC/WithAuthRedirect';
import { addMessageActionCreator } from '../../../redux/messages-reducer';
import Messages from './Messages';
import './Messages.css'

const mapStateToProps = (state) => {
    return {
        usersList: state.messagesData.usersList,
        chatSMS: state.messagesData.chatSMS
    }  
}

export default compose(
    connect(mapStateToProps, {addMessage: addMessageActionCreator}),
    WithAuthRedirect
) (Messages)

