import { AppStateType } from './../../redux/redux-store';
import { ThunkAction } from 'redux-thunk';
const SET_INITIALIZED = 'SET-INITIALIZED'

export type InitialStateInitializedType = {
    initialized: boolean
}

///////ActionTypes

export type AppActionsTypes = InitializedSuccessActionType

export type AppThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AppActionsTypes>

export type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}
