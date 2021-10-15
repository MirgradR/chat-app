const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_MESSAGE_CREATE = 'NEW-MESSAGE-CREATE'

let initialState = {
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
    newMessageText: ''
}

export const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_MESSAGE_CREATE: 
            return {
                ...state,
                newMessageText: action.text
            } 
        case ADD_MESSAGE: 
            if (!state.newMessageText) return
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                chatSMS: [...state.chatSMS, {text: newMessage, id: 6}]
            }
        default: 
            return state
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const newMessageTextActionCreator = (text) => {
    return {
        type: NEW_MESSAGE_CREATE,
        text: text,
    }
}