import React from 'react';
import './TodoCounter.css';

const TodoCounter = ({ total, completed }) => {
  return (
    <div className='counter-container'>
      <h2>
        {total === completed
          ? 'Congratulations!🥳🎉'
          : completed ===  0 
          ? 'Start completing your tasks 😎'
          : `${completed} Task of ${total}`}
      </h2>
      {/* Resto del código */}
    </div>
  );
};

export { TodoCounter };
