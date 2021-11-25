import { AppActionsTypes, AppThunkType, InitializedSuccessActionType, InitialStateInitializedType } from "../types/AppTypes/AppTypes"
import { setUserData } from "./auth-reducer"

const SET_INITIALIZED = 'SET-INITIALIZED'

let initialState: InitialStateInitializedType = {
    initialized: false,
}

export const initializedReducer = (state = initialState, action: AppActionsTypes): InitialStateInitializedType => {
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

export const initializedSuccessAC = ():InitializedSuccessActionType => {
    return {
        type: SET_INITIALIZED,
    }
}

export const initializeThunkCreator = (): AppThunkType => {
    return async (dispatch) => {
        await dispatch(setUserData())
        dispatch(initializedSuccessAC())             
    }
}
//        let promise = await dispatch(setUserData())
// promise.then( () => {
//     dispatch(initializedSuccessAC())
// })  