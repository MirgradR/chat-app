const ADD_MESSAGE = 'MESSAGES/ADD-MESSAGE'

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


export type addMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessage: string
}