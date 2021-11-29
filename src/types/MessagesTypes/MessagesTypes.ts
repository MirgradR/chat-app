import { ThunkAction } from 'redux-thunk';
import { messagesActions } from "../../redux/messages-reducer"
import { AppStateType } from "../../redux/redux-store"
import { InferActionsTypes } from "../commonTypes"

export type MessagesUsersListType = {
    name: string, 
    id: number
}
export type MessagesChatSMSType = {
    text: string, 
    id: number
}

export type InitialStateMessagesType = {
    usersList: Array<MessagesUsersListType>
    chatSMS: Array<MessagesChatSMSType>
}

///////ActionTypes

export type MessagesActionsTypes = InferActionsTypes<typeof messagesActions>

export type FriendsThunkType = ThunkAction<Promise<void>, AppStateType, unknown, InferActionsTypes<typeof messagesActions>>