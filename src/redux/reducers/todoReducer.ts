import { ADD_TODO, DELETE_TODO, DELETE_TODOLOADING, SET_TODO, SET_TODOLOADING } from "../ActionTypes"
import { TodoAction, todoStateI } from "../../types/types"

const todoState: todoStateI = {
    todo: [],
    error: false,
    loading: true
}

export const todoReducer = ( 
    state: todoStateI = todoState,
    action: TodoAction 
) => {
    
    switch(action.type){
        
        case ADD_TODO:

            return {
                ...state,
                error: action.payload.error,
                todo: [...state.todo, action.payload.todo]
            }
        
        case DELETE_TODO:

            const newTodoState = state.todo.filter(
                (t) => t.id !== action.payload.id
            )

            return {
                ...state,
                error: action.payload.error,
                todo: newTodoState
            }
        
        case SET_TODO:

            return {
                ...state,
                error: action.payload.error,
                todo: action.payload.todo
            }
        
        case SET_TODOLOADING: 
            return {
                ...state,
                loading: true
            }
        
        case DELETE_TODOLOADING:
            return {
                ...state,
                loading: false
            }
        
        default:
            return state
    }
}