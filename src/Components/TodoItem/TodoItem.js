import React from 'react';
import {DeleteIcon} from './DeleteIcon';
import {CompleteIcon} from './CompleteIcon';
// import { IoCheckmarkOutline } from 'react-icons/io5';
// import { FcFullTrash } from 'react-icons/fc';
import './TodoItem.css';

const TodoItem = ({ task, checked, completeTask, deleteTask }) => {
  return (
    <li className={checked ? 'completed' : 'uncompleted'}>
      <div className='task-info' onClick={completeTask}>
        <p>{task}</p>
        {checked ? <CompleteIcon /> : ''}
      </div>
        <DeleteIcon deleteTask={deleteTask}/>
    </li>
  );
}

export { TodoItem }
