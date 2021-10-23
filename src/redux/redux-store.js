import { combineReducers, createStore } from "redux";
import {profileReducer} from './profile-reducer'
import {messagesReducer} from './messages-reducer'
import {navigationReducer} from './navigation-reducer'
import { friendsReducer } from "./friends-reducer";
import { authReducer } from "./auth-reducer";

export const API_KEY = 'e936cc93-ffd1-4fe3-841e-539754d0802a'

let reducers = combineReducers({
    profileData: profileReducer,
    messagesData: messagesReducer,
    navigation: navigationReducer,
    friendsData: friendsReducer,
    auth: authReducer
})

let store = createStore(reducers);

window.store = store


export default store