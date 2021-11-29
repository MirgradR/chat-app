import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../../HOC/WithAuthRedirect';
import { messagesActions } from '../../../redux/messages-reducer';
import Messages from './Messages';
import './Messages.css'

const mapStateToProps = (state) => {
    return {
        usersList: state.messagesData.usersList,
        chatSMS: state.messagesData.chatSMS
    }  
}

export default compose(
    connect(mapStateToProps, {addMessage: messagesActions.addMessageActionCreator}),
    WithAuthRedirect
) (Messages)

