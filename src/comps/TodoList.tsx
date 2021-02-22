import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authContext } from "../context/authContext";
import { DeleteUser } from "../redux/actionCreators/user";
import { deleteTodo, getTodos } from "../redux/actions/todo";
import { appStateI, todoStateI } from "../types/types";

import { AddTodoForm } from "./addTodoForm";

interface todoProps {
  title?: string;
}

export const TodoList: React.FC<todoProps> = ({ title }) => {

  const { jwt } = useContext(authContext)

  const dispatch = useDispatch();

  const todos = useSelector<appStateI, todoStateI>((state) => state.todoState);

  useEffect( () => {

    dispatch(getTodos(jwt!))

  }, [jwt, dispatch])

  if(todos.loading){
    return (
      <div>
        loading.
      </div>
    )
  }
  return (
    <div className='container'>
      <header>
        <button onClick={ () => dispatch(DeleteUser())}>
          LOG OUT
        </button>
      </header>
      {title}

      {todos.todo.map((todo) => (
        <div key={todo.id} className='draggable' draggable={true}>
          {todo.do}
          <div>
            <button
              onClick={ () => dispatch(deleteTodo( jwt!, todo.id)) }
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

