import { NavigateFunction } from "react-router"
import { fetchDB } from "../../helpers/APIFunctions"
import { DeleteUserLoading, SetUser, SetUserLoading } from "../actionCreators/user"


/*
    Find user by jwt
*/
export const findUser = (jwt?: string ) => {
    return (dispatch: any) => {
        dispatch(SetUserLoading())
        if(!jwt){
            dispatch(DeleteUserLoading())
            return
        }
        fetchDB({url: "/user", method:"GET"}, jwt)
            .then(JSONresult => {
                if( !JSONresult.error) {
                    dispatch(SetUser(jwt,JSONresult.user))
                }
                
                })
                .finally(() => {
                    dispatch(DeleteUserLoading())
                })
    } 
        
}


/*
    Log in the user
*/
export const logInUser = (
    e: React.FormEvent<HTMLFormElement>,
    navigate: NavigateFunction, 
    username?: string, 
    password?: string
) => {

    e.preventDefault()

    if(!username || !password) {
        return // not finished yet, "Error" state is still missing!
    }
    return (dispatch: any) => {
        dispatch(SetUserLoading())

        fetchDB({ url: "/user/login", method: "POST"}, undefined, {username, password})
            .then( JSONresult => {
                if(!JSONresult.error){
                    localStorage.setItem('jwt', JSONresult.jwt)
                    dispatch(SetUser(JSONresult.jwt))
                    navigate("/app")
                } else {
                    console.log(JSONresult.error)
                    return // not finished yet, "Error" state is still missing!
                }
            })
                .finally( () => dispatch(DeleteUserLoading()) ) 
    }
}