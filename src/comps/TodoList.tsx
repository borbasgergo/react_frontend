import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authContext } from "../context/authContext";
import { deleteTodo, getTodos } from "../helpers/APIFunctions";
import { appStateI, todo } from "../types/types";

import { AddTodoForm } from "./addTodoForm";

interface todoProps {
  title?: string;
}

export const TodoList: React.FC<todoProps> = ({ title }) => {

  const { jwt } = useContext(authContext)

  const dispatch = useDispatch();

  const todos = useSelector<appStateI, todo[]>((state) => state.todoState.todo);

  const [ loading, setLoading ] = useState<boolean>(true)

  useEffect( () => {

    getTodos(jwt!).then(result => {
      if(!result.error && result.todos){
        dispatch({ type: "SET_TODO", payload: result.todos })
      }
    })
    .finally( () => setLoading(false))

  }, [dispatch, jwt])

  if(loading){
    return (
      <div>
        loading.
      </div>
    )
  }
  return (
    <div className='container'>

      {title}

      {todos.map((todo) => (
        <div key={todo.id} className='draggable' draggable={true}>
          {todo.do}
          <div>
            <button
              onClick={() => {
                deleteTodo( jwt!, todo.id).then(result => {
                  if( !result.error ) dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })
                })
              }}
            >
              delete
            </button>
          </div>
        </div>
      ))}

      <AddTodoForm />
    </div>
  );
};

