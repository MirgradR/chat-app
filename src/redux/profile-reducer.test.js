import { addPostActionCreator, profileReducer } from "./profile-reducer";

it('adding new post complited', () => {
    // test data
    let action = addPostActionCreator('testing')
    let state = {
        postUsers: [
            { post: 'Hi girls', id: 1, likes: 23, name: 'Jenya' },
            { post: 'wow man', id: 2, likes: 12, name: 'Jorik' },
            { post: 'How are you', id: 3, likes: 5, name: 'Roma' },
            { post: 'Haha', id: 4, likes: 8, name: 'Masha' },
            { post: 'Haha', id: 5, likes: 3, name: 'Igor' }
        ],
    }
    // test action
    let newState = profileReducer(state, action)

    // test expectation
    expect(newState.postUsers.length).toBe(6)
    expect(newState.postUsers[5].post).toBe('testing')
})
