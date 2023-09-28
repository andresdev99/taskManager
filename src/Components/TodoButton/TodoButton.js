import React from 'react'
import './TodoButton.css'
const CreateTodoButton = ({ addNewTask }) => {

    return (
        <button onClick={() => {
            addNewTask();
        }}>Add new task</button>
    )
}

export { CreateTodoButton }
