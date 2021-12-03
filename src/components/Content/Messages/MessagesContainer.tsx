import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../../HOC/WithAuthRedirect';
import { messagesActions } from '../../../redux/messages-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { MessagesContainerPropsType, MessagesContainerStatePropsType } from '../../../types/MessagesTypes/MessagesTypesComponent';
import Messages from './Messages';
import './Messages.css'


const MessagesContainer: React.FC<MessagesContainerPropsType> = (props) => {

    return (
        <Messages usersList = {props.usersList} chatSMS = {props.chatSMS} addMessage = {props.addMessage} />
    )
}

const mapStateToProps = (state: AppStateType): MessagesContainerStatePropsType => {
    return {
        usersList: state.messagesData.usersList,
        chatSMS: state.messagesData.chatSMS
    }  
}

export default compose(
    connect(mapStateToProps, {addMessage: messagesActions.addMessageActionCreator}),
    WithAuthRedirect
) (MessagesContainer) as React.ComponentType

