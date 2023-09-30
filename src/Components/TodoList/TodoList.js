import React from 'react'
import './TodoList.css'
const TodoList = ({children}) => {
  return (
    <ul className='tasks-list'>
      {children}
    </ul>
  )
}

export { TodoList };
