import { React, useContext } from 'react'
import './TodoButton.css'
import { TodoContext } from '../TodoContext/TodoContext'

const CreateTodoButton = () => {
    const { addNewTask } = useContext(TodoContext)
    
    return (
        <button onClick={() => {
            addNewTask();
        }}>Add new task</button>
    )
}

export { CreateTodoButton }
