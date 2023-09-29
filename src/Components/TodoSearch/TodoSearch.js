import {React, useContext} from 'react';
import { TodoContext } from '../TodoContext/TodoContext'
import './TodoSearch.css'

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext) 

  return (
    <input
      placeholder='Develop software'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}

export { TodoSearch }
