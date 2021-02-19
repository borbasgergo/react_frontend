import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authContext } from '../../context/authContext';
import { appStateI, authStateI } from '../../types/types';

export const AuthContextProvider: React.FC = ( { children} ) => {

    const dispatch = useDispatch()

    const auth = useSelector<appStateI, authStateI>( (state) => state.authState)

    const [ loading, setLoading ] = useState<boolean>(true)

    console.log(auth)

    useEffect(() => {
        
        if(! auth.user ){
            fetch("http://localhost:9000/user", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + auth.jwt
                }
            })
            .then( result => result.json())
            .then( result => {
                console.log(result)
                if( !result.error && result.user) {

                    dispatch({
                        type: "ADD_USER",
                        payload: {
                            jwt: auth.jwt,
                            isLoggedIn: true,
                            user: result.user
                        }
                    })
                }

                
            })
            .finally( () => {
                setLoading(false)
            })
        }

    }, [auth, dispatch])

    if( loading ) {
        return (
            <div>
                loading
            </div>
        )
    } 
    return (
        <authContext.Provider value={auth}>
            { children }
        </authContext.Provider>
    )
}
