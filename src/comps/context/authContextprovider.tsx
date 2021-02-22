import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authContext } from '../../context/authContext';
import { findUser } from '../../redux/actions/user';
import { appStateI, authStateI } from '../../types/types';

export const AuthContextProvider: React.FC = ( { children} ) => {

    const dispatch = useDispatch()

    const auth = useSelector<appStateI, authStateI>( (state) => state.authState)

    console.log(auth)

    useEffect(() => {
        
        if(!auth.user && auth.jwt){
            dispatch(findUser(auth.jwt))
        }

    }, [auth.jwt, auth.user, dispatch])

    if( auth.loading ) {
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
