import { fetchDB } from "../../helpers/APIFunctions"
import { 
    DeleteTodo,
    AddTodo,
    SetTodo,
    SetTodoLoading,
    DeleteTodoLoading
} from "../actionCreators/todo"

export const getTodos = (jwt: string) => {
    return (dispatch: any) => {
        dispatch(SetTodoLoading())
        fetchDB({url: "/todo", method: "GET"}, jwt)
            .then(JSONresult => {
                if(!JSONresult.error){
                    dispatch(SetTodo(false, JSONresult.todos))
                }
            })
                .finally( () => {
                    dispatch(DeleteTodoLoading())
                })
    }
}

export const deleteTodo = (jwt: string, todoId: number) => {
    return (dispatch: any) => {
        fetchDB({url: `/todo/delete/${todoId}`, method: "DELETE"}, jwt)
            .then(JSONresult => {
                if(!JSONresult.error){
                    dispatch(DeleteTodo(false, todoId))
                }
            })
    }
}

export const addTodo = (jwt: string, data: any ) => {
    return (dispatch: any) => {
        console.log(data)
        fetchDB({url: "/todo/add", method: "POST"}, jwt, data)
            .then(JSONresult => {
                if( !JSONresult.error ){
                    dispatch(AddTodo(false, JSONresult.todo))
                }
                
            })
    } 
        
}