import { ADD_TODO, DELETE_TODO, SET_TODO } from "../../types/ActionTypes"
import { TodoAction, todoStateI } from "../../types/types"


const todoState: todoStateI = {
    todo: []
}

export const todoReducer = ( 
    state: todoStateI = todoState,
    action: TodoAction 
) => {
    
    switch(action.type){
        
        case ADD_TODO:

            return {
                todo: [...state.todo, action.payload]
            }
        
        case DELETE_TODO:

            const newTodoState = state.todo.filter(
                (t) => t.id !== action.payload.id
            )

            return {
                todo: newTodoState
            }
        
        case SET_TODO:

            return {
                todo: action.payload
            }
        
        default:
            return state
    }
}