import { InitialStateMessagesType, MessagesActionsTypes } from "../types/MessagesTypes/MessagesTypes"

let initialState: InitialStateMessagesType = {
    usersList: [
        { name: 'Alex', id: 1 },
        { name: 'Jenya', id: 2 },
        { name: 'Jorik', id: 3 },
        { name: 'Roma', id: 4 },
        { name: 'Nikita', id: 5 },
        { name: 'Masha', id: 6 },
        { name: 'Kate', id: 7 }
    ],
    chatSMS: [
        { text: 'Hi', id: 1 },
        { text: 'Good', id: 2 },
        { text: 'How are you', id: 3 },
        { text: 'Haha', id: 4 },   
    ],
}

export const messagesReducer = (state = initialState, action: MessagesActionsTypes) => {
    switch (action.type) {
        case 'MESSAGES/ADD-MESSAGE': 
            let newMessage = action.newMessage
            return {
                ...state,
                chatSMS: [...state.chatSMS, {text: newMessage, id: 6}]
            }
        default: 
            return state
    }
}

export const messagesActions = {
    addMessageActionCreator: (newMessage: string) => {
        return {
            type: 'MESSAGES/ADD-MESSAGE',
            newMessage: newMessage
        } as const
    }
}
