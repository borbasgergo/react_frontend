import { todo } from "../../../types/types";
import { 
    ADD_TODO,
    DELETE_TODO,
    DELETE_TODOLOADING, 
    SET_TODO, 
    SET_TODOLOADING 
} from "../../ActionTypes";


/*interface ReturnObjectType<T> {
    type: string,
    payload: T
}*/


export const SetTodoLoading = () => {
    return {
        type: SET_TODOLOADING
    }
}

export const DeleteTodoLoading = () => {
    return {
        type: DELETE_TODOLOADING
    }
}

export const AddTodo = (error: boolean, todo?: todo) => {
    return {
        type: ADD_TODO,
        payload: {
            error: error,
            todo: todo
        }
    }
}


export const DeleteTodo = (error: boolean, id?: number) => {
    return {
        type: DELETE_TODO,
        payload: {
            error: error,
            id: id
        }
    }
}



export const SetTodo = (error: boolean, todos?: todo[]) => {
    return {
        type: SET_TODO,
        payload: {
            error: error,
            todo: todos,
        }
    }
}
