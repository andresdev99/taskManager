import {React, useContext} from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext)
  return (
    <div className='counter-container'>
      <h2>
        {totalTodos === completedTodos
          ? 'Congratulations!🥳🎉'
          : completedTodos ===  0 
          ? 'Start completing your tasks 😎'
          : `${completedTodos} Task of ${totalTodos}`}
      </h2>
      {/* Resto del código */}
    </div>
  );
};

export { TodoCounter };
