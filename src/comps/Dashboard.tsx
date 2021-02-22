import React from "react";
import { TodoList } from "./TodoList";

export const Dashboard: React.FC = () => {
 
    return (
        <div>

            <h2>Todos:</h2>

            <div>
                <TodoList title="Your todos" />
            </div>
            
        </div>
    );
    
};
