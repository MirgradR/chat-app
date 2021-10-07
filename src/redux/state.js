const ADD_POST = 'ADD-POST'
const NEW_POST_CREATE = 'NEW-POST-CREATE'
const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_MESSAGE_CREATE = 'NEW-MESSAGE-CREATE'

let store = {
    _data: {
        profileData: {
            postUsers: [
                { post: 'Hi girls', id: 1, likes: 23, name: 'Jenya' },
                { post: 'wow man', id: 2, likes: 12, name: 'Jorik' },
                { post: 'How are you', id: 3, likes: 5, name: 'Roma' },
                { post: 'Haha', id: 4, likes: 8, name: 'Masha' },
                { post: 'Haha', id: 5, likes: 3, name: 'Igor' }
            ],
            profileInfo: [
                { Login: 'Mirgrad' },
                { Job: 'Frontend' },
                { City: 'Moscow' },
                { Birth: '2th May' },
                { Education: 'KubSAU' }
            ],
            newPostText: ''
        },
        messagesData: {
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
        },
        navigation: ['Profile', 'Messages', 'News', 'Music', 'Friends', 'Settings']   
    },
    _renderEntireTree() {
        console.log('render')
    },
    getData() {
        return this._data
    },
    subscribe(observer) {
        this._renderEntireTree = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            if (!this._data.profileData.newPostText) return
            let newPost = {
                post: this._data.profileData.newPostText,
                id: 6,
                likes: 0,
                name: 'Ruslan'
            }
            this._data.profileData.postUsers.push(newPost)
            this._data.profileData.newPostText = ''
            this._renderEntireTree(this._data)

        } else if (action.type === NEW_POST_CREATE) {
            this._data.profileData.newPostText = action.text
            this._renderEntireTree(this._data)

        } else if (action.type === ADD_MESSAGE) {
            if (!this._data.messagesData.newMessageText) return
            let newMessage = {
                text: this._data.messagesData.newMessageText,
                id: 6 
            }
            this._data.messagesData.chatSMS.push(newMessage)
            this._data.messagesData.newMessageText = ''
            this._renderEntireTree(this._data)

        } else if (action.type === NEW_MESSAGE_CREATE) {
            this._data.messagesData.newMessageText = action.text
            this._renderEntireTree(this._data)
        }
    },
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const newPostTextActionCreator = (text) => {
    return {
        type: NEW_POST_CREATE,
        text: text,
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

window.store = store

export default store