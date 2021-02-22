import { combineReducers } from "redux"
import { appStateI } from "../types/types"
import { authReducer } from "./reducers/authReducer"
import { rootReducer } from "./reducers/rootReducer"
import { todoReducer } from "./reducers/todoReducer"

export default combineReducers<appStateI>(
    { 
        rootState: rootReducer, 
        todoState: todoReducer,
        authState: authReducer 
    }
)
