

    /*

        Types:
    */
    
    export type RootAction = 
        {type: "CHANGE_THEME", payload: string}
    
    export type TodoAction = 
        { type: "ADD_TODO", payload: todo }
        | { type: "DELETE_TODO", payload: { id: number } }
        | { type: "SET_TODO", payload: todo[]}
     
    export type AuthAction = 
        { type: "ADD_USER", payload: authStateI}
        
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
        todo: todo[]
    }

    export interface rootStateI {
        theme: string
    }

    export interface authStateI {
        isLoggedIn: boolean,
        jwt: string | null,
        user?: user
    }
    export interface appStateI {
        todoState: todoStateI,
        rootState: rootStateI,
        authState: authStateI
    }
    
