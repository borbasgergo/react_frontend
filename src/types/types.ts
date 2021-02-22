import { ADD_TODO, ADD_USER, DELETE_TODO, DELETE_TODOLOADING, DELETE_USER, DELETE_USERLOADING, SET_TODO, SET_TODOLOADING, SET_USERLOADING } from "../redux/ActionTypes";
    /*

        Types:
    */
    

    export type RootAction = 
        {type: "CHANGE_THEME", payload: string}
    

        
    export type TodoAction = 
        { type: typeof ADD_TODO, payload: {
                error: boolean,
                loading: boolean,
                todo: todo
            } 
        }
        | { type: typeof DELETE_TODO, payload: {
                error: boolean,
                loading: boolean,
                id: number
            }
        }
        | { type: typeof SET_TODO, payload: {
                error: boolean,
                loading:boolean,
                todo: todo[]
            }
        }
        | { type: typeof SET_TODOLOADING }
        | { type: typeof DELETE_TODOLOADING }
    


    export type AuthAction = 
        { type: typeof ADD_USER, payload: {
            isLoggedIn: boolean,
            jwt?: string,
            user?: user
        }}
        | { type: typeof DELETE_USER }
        | { type: typeof SET_USERLOADING}
        | { type: typeof DELETE_USERLOADING}
        
    /*

        Interfaces:
    */
    export interface todo {
        id: number, 
        do: string,
        done: boolean
    }
    export interface user {
        username: string,
        email: string,
    }
    export interface todoStateI {
        todo: todo[],
        error: boolean,
        loading: boolean
    }

    export interface rootStateI {
        theme: string
    }

    export interface authStateI {
        isLoggedIn: boolean,
        jwt?: string,
        user?: user,
        loading: boolean
    }
    export interface appStateI {
        todoState: todoStateI,
        rootState: rootStateI,
        authState: authStateI
    }
    
