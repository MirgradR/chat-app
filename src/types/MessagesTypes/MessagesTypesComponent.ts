

export type MessagesContainerPropsType = MessagesContainerStatePropsType & MessagesContainerDispatchPropsType & MessagesContainerOwnPropsType

export type MessagesContainerStatePropsType = {
    usersList: Array<UsersListType>
    chatSMS: Array<ChatSMS>
}
export type UsersListType = {
    name: string, 
    id: number
}
export type ChatSMS = {
    text: string, 
    id: number
}

export type MessagesContainerDispatchPropsType = {
    addMessage: (newMessage: string) => void
}
export type MessagesContainerOwnPropsType = {
    prop?: any
}

export type MessagesPropsType = {
    addMessage: (newMessage: string) => void
    usersList: Array<UsersListType>
    chatSMS: Array<ChatSMS>
}
export type ChatPropsType = {
    chatSMS: Array<ChatSMS>
    addMessage: (newMessage: string) => void
}
export type ChatSMSPropsType = {
    user: string
    text: string
}
export type DialogsPropsType = {
    users: Array<UsersListType>
}
export type DialogsItemPropsType = {
    user: string 
    idU: number
}