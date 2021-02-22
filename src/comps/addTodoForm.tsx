import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authContext } from '../context/authContext';
import { addTodo } from '../redux/actions/todo';



export const AddTodoForm: React.FC = () => {

    const dispatch = useDispatch()

    const { jwt } = useContext(authContext)

    const [task, setTask] = useState<string>("")

    const onTaskChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const submitAddTodoForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(addTodo( jwt!, {do: task}))
        setTask("")       
    }

    return (
        <form onSubmit={ (e) =>  submitAddTodoForm(e) } >

            <input type="text" placeholder="to do" value={task} name="todo" onChange={(e) => onTaskChangeHandle(e)} />
            <input type="submit" value="Add" />

        </form>
    )
}