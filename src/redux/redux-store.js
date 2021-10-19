import { combineReducers, createStore } from "redux";
import {profileReducer} from './profile-reducer'
import {messagesReducer} from './messages-reducer'
import {navigationReducer} from './navigation-reducer'
import { friendsReducer } from "./friends-reducer";

let reducers = combineReducers({
    profileData: profileReducer,
    messagesData: messagesReducer,
    navigation: navigationReducer,
    friendsData: friendsReducer
})

let store = createStore(reducers);

window.store = store


export default store