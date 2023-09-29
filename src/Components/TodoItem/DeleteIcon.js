import React from 'react'
import { TodoIcon } from './TodoIcon'

const DeleteIcon = ({deleteTask}) => {
    return (
        <TodoIcon 
            type='delete-task'
            color='transparent'
            deleteTask={deleteTask}
        />
    )
}

export { DeleteIcon }
