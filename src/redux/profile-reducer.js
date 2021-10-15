const ADD_POST = 'ADD-POST'
const NEW_POST_CREATE = 'NEW-POST-CREATE'

let initialState = {
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
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST_CREATE: 
            return {
                ...state,
                newPostText: action.text
            }
        case ADD_POST: 
            if (!state.newPostText) return state
            let newPost = state.newPostText
            return {
                ...state,
                newPostText: '',
                postUsers: [...state.postUsers, {post: newPost, id: 6, likes: 0, name: 'Ruslan'}]
            }
        default: 
            return state
    }
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