import { AppActionsTypes, InitialStateInitializedType } from "../types/AppTypes/AppTypes"
import { ThunkType } from "../types/commonTypes"
import { setUserData } from "./auth-reducer"

let initialState: InitialStateInitializedType = {
    initialized: false,
}

export const initializedReducer = (state = initialState, action: AppActionsTypes) => {
    switch(action.type) {
        case 'SET-INITIALIZED':
            return {
                ...state, 
                initialized: true
            }
        default:
            return state
    }
}

export const appInitialActions = {
    initializedSuccessAC: () => {
        return {
            type: 'SET-INITIALIZED',
        } as const
    }
}

export const initializeThunkCreator = (): ThunkType<AppActionsTypes> => {
    return async (dispatch) => {
        await dispatch(setUserData())
        dispatch(appInitialActions.initializedSuccessAC())             
    }
}
