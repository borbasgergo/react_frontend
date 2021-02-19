import React from "react";
import { useSelector } from "react-redux";
import { appStateI, authStateI, user } from "../types/types";
import { TodoList } from "./TodoList";

export const Dashboard: React.FC = () => {

    //const { username } = useSelector<appStateI, authStateI>( state => state.authState);

 
    return (
        <div>

            <h2>Todos:</h2>

            <div>
            <TodoList title="Your todos" />
            </div>
            
        </div>
    );
    
};
