import { messagesReducer } from "./messages-reducer"
import { navigationReducer } from "./navigation-reducer"
import { profileReducer } from "./profile-reducer"

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
        this._data.profileData = profileReducer(this._data.profileData, action)
        this._data.messagesData = messagesReducer(this._data.messagesData, action)
        this._data.navigation = navigationReducer(this._data.navigation, action)
        this._renderEntireTree(this._data)
    },
}

window.store = store

export default store