
import React, { useContext } from 'react';
import { authContext } from '../context/authContext';
import { GoToDashboard } from './GoToDashboard';
import { LoginForm } from './LoginForm';


export const Home: React.FC = () => {

    const { isLoggedIn } = useContext(authContext)

    return (
        <div>
            Home

            {
                isLoggedIn ? (
                    <GoToDashboard />
                ) : (
                    <LoginForm />
                )
            }
            
        </div>
    )
}