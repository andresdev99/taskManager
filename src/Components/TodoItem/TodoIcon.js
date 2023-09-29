import React from 'react'
import { IoCheckmarkOutline as CheckSvg } from 'react-icons/io5';
import { ReactComponent as DeleteSvg } from './delete.svg'


const iconTypes = {
    'check': (color) => <CheckSvg />,
    'delete-task': (color) => <DeleteSvg fill={color}/>
}

const TodoIcon = ({ type, color, deleteTask }) => {
    return (
        <span className={type} onClick={deleteTask}>
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }
