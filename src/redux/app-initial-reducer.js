import { setUserData } from "./auth-reducer"

const SET_INITIALIZED = 'SET-INITIALIZED'

let initialState = {
    initialized: false,
}

export const initializedReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state, 
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccessAC = () => {
    return {
        type: SET_INITIALIZED,
    }
}

export const initializeThunkCreator = () => {
    return (dispatch) => {
        let promise = dispatch(setUserData())
        promise.then( () => {
            dispatch(initializedSuccessAC())
        })       
    }
}