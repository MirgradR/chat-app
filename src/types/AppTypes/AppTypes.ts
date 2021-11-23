const SET_INITIALIZED = 'SET-INITIALIZED'

export type InitialStateInitializedType = {
    initialized: boolean
}

///////ActionTypes

export type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}