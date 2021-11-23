import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import {profileReducer} from './profile-reducer'
import {messagesReducer} from './messages-reducer'
import {navigationReducer} from './navigation-reducer'
import { friendsReducer } from "./friends-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware  from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import { initializedReducer } from "./app-initial-reducer";

let reducers = combineReducers({
    profileData: profileReducer,
    messagesData: messagesReducer,
    navigation: navigationReducer,
    friendsData: friendsReducer,
    auth: authReducer,
    form: formReducer,
    app: initializedReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.store = store

export default store