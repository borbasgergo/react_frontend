import { AuthAction, authStateI } from "../../types/types"
import { ADD_USER, DELETE_USER, DELETE_USERLOADING, SET_USERLOADING } from "../ActionTypes"

const authState: authStateI = {
    isLoggedIn: false,
    jwt: localStorage.getItem('jwt') ?? undefined,
    loading: true
}

export const authReducer = (
    state: authStateI = authState,
    action: AuthAction
) => {
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
                jwt: action.payload.jwt
            }
        
        case DELETE_USER:
            return {
                ...state,
                isLoggedIn:false,
                jwt: undefined,
                user: undefined
            }
        
        case SET_USERLOADING:
            return {
                ...state,
                loading: true
            }
        
        case DELETE_USERLOADING: 
            return {
                ...state,
                loading:false
            }

        default: 
            return state
    }
}