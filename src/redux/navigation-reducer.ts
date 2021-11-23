import { InitialStateNavigationType } from "../types/NavigationTypes/NavigationTypes"

let initialState: InitialStateNavigationType = {
    navigation: ['Profile', 'Messages', 'Friends', 'Settings']
}

export const navigationReducer = (state = initialState, action: any): InitialStateNavigationType => {
    return state
}