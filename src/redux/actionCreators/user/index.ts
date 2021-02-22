import { user } from "../../../types/types"
import { 
    ADD_USER, 
    DELETE_USER, 
    DELETE_USERLOADING, 
    SET_USERLOADING 
} from "../../ActionTypes"

export const SetUserLoading = () => {
    return {
        type: SET_USERLOADING
    }
}

export const DeleteUserLoading = () => {
    return {
        type: DELETE_USERLOADING
    }
}

export const DeleteUser = () => {
    localStorage.removeItem('jwt')
    return {
        type: DELETE_USER
    }
}

export const SetUser = (jwt: string, user?: user) => {
    return {
        type: ADD_USER,
        payload: {
            user,
            jwt
        }
    }
}
