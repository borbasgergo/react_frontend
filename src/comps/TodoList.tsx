import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authContext } from "../context/authContext";
import { fetchDB } from "../helperFunctions/fetchHelper";
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

      fetchDB({
        url: "http://localhost:9000/todo",
        method: "GET"
      }, jwt!)
      .then(result => result.json())
      .then(result => {
          if( !result.error && result.todos ){
            dispatch({
              type: "SET_TODO",
              payload: result.todos
            }) 
          }
      })
      .finally(() => {
        setLoading(false)
      })

  }, [dispatch, jwt])

  const DeleteTodo = ( id: number ) => {

      fetchDB({
        url: "http://localhost:9000/todo/delete/"+id,
        method: "POST"
      }, jwt! )
      .then( result => result.json())
      .then( result => {
        if(!result.error){
          dispatch({
            type: "DELETE_TODO",
            payload: { id: id }
          })
        }
      })

  }


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
                DeleteTodo( todo.id)
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

