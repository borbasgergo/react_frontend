import { CHANGE_THEME } from "../../types/ActionTypes"
import { RootAction, rootStateI } from "../../types/types"

const rootState: rootStateI = {
    theme: ""
}

export const rootReducer = ( 
    state: rootStateI = rootState,
    action: RootAction 
) => {
    switch(action.type) {
        case CHANGE_THEME:
            const newSt: rootStateI = {
                ...state,
                theme: action.payload
            }
            return newSt
        default:
            return state
    }
}