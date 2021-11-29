import { appInitialActions } from './../../redux/app-initial-reducer';
import { InferActionsTypes } from '../commonTypes';

export type InitialStateInitializedType = {
    initialized: boolean
}

///////ActionTypes

export type AppActionsTypes = InferActionsTypes<typeof appInitialActions>