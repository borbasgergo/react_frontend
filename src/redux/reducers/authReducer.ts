import { AuthAction, authStateI } from "../../types/types"

const authState: authStateI = {
    isLoggedIn: false,
    jwt: localStorage.getItem('jwt')
}

export const authReducer = (
    state: authStateI = authState,
    action: AuthAction
) => {
    switch(action.type){
        case "ADD_USER":
            return action.payload
        
        default: 
            return state
    }
}