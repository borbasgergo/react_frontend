import React from 'react';
import { authStateI } from '../types/types';


export const authContext = React.createContext<authStateI>(
    {
        isLoggedIn: false,
        jwt: ""
    }
)