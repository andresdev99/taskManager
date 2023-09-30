import { React, useContext } from 'react'
import './TodoButton.css'
import { TodoContext } from '../TodoContext/TodoContext'

const CreateTodoButton = () => {
    const { addNewTask, setOpenModal, openModal } = useContext(TodoContext)
    
    return (
        <button className={'add-task'} onClick={() => {
            setOpenModal(!openModal);
        }}>Add new task</button>
    )
}

export { CreateTodoButton }
