import React from 'react';
import { useNavigate } from 'react-router';

export const GoToDashboard: React.FC = () => {

    const navigate = useNavigate()
    
    return (
        <button onClick={ () => {
            navigate("/app")
        }}>
            Go To Dashboard
        </button>
    )
}