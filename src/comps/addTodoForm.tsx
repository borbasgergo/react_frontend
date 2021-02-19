import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authContext } from '../context/authContext';
import { fetchDB } from '../helperFunctions/fetchHelper';


export const AddTodoForm: React.FC = () => {

    const dispatch = useDispatch()

    const { jwt } = useContext(authContext)

    const [task, setTask] = useState<string>("")

    const onTaskChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const submitAddTodoForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        fetchDB({
            url: "http://localhost:9000/todo/add",
            method: "POST",
            body: JSON.stringify({ do: task })
        }, jwt!)
        .then( result => result.json())
        .then( result => {
            console.log(result)
            if(!result.error){
                dispatch({
                    type: "ADD_TODO",
                    payload: result.todo // must be: { id, do, isDone }
                })
            }
        })
        .finally( () => {
            setTask("")
        })
        
    }

    return (
        <form onSubmit={ (e) =>  submitAddTodoForm(e) } >

            <input type="text" placeholder="to do" value={task} name="todo" onChange={(e) => onTaskChangeHandle(e)} />
            <input type="submit" value="Add" />

        </form>
    )
}