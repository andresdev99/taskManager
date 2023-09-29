import './App.css';
import { React, useState, useEffect } from 'react'
import { AppUI } from './AppUI';


function useLocalStorage(itemName, defaultValue) {

  const getStoragedItems = () => {
    const parsedItems = JSON.parse(localStorage.getItem(itemName));

    // If there is no data then set one as defeault
    if (!parsedItems || parsedItems.length < 1) {
      const stringItems = JSON.stringify(defaultValue);
      localStorage.setItem(itemName, stringItems);
      return defaultValue;
    }
    return parsedItems;
  }

  const [items, setItem] = useState(getStoragedItems())

  const setItemToLocalStorage = (newItem) => {
    if (newItem) {
      // Creating new todos based on the last ones and adding the new one
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  }

  return [items, setItemToLocalStorage, getStoragedItems];
}

function App() {

  // Search input data
  const [searchValue, setSearchValue] = useState('');
  const [todos, saveTodo, getItems] = useLocalStorage('todos',
    [
      { task: 'Develop Software', checked: false },
      { task: 'Cook Breakfast', checked: false },
      { task: 'Study', checked: false },
      { task: 'Do tasks', checked: false },
      { task: 'Finish course', checked: false }
    ]
  );

  // Todos Counter
  const completedTodos = todos.filter(todo => !!todo.checked).length;
  const totalTodos     = todos.length

  // Just for not having the list empty never
  useEffect(() => {
    // When total Todos doesn't have anything then reestart it
    if(totalTodos == 0){
      saveTodo(getItems());
    }
  }, [totalTodos])
  
  // Filter Todos based on search
  const searchTodos  = todos.filter(todo => {
    const todoText   = todo.task.toLocaleLowerCase();
    const searchTask = searchValue.toLocaleLowerCase();
    return todoText.includes(searchTask)
  });

  const completeTask = (taskIndex) => {
    // Check that the index is between the todos range
    if (taskIndex >= 0 && taskIndex < todos.length) {
      // Todos copy
      const newTodos = [...todos];
      // Delete task from all todos tasks
      newTodos[taskIndex].checked = !newTodos[taskIndex].checked;
      // Complete Todo
      saveTodo(newTodos);
    }
  }

  const deleteTask = (taskIndex) => {
    // Check that the index is between the items range
    if (taskIndex >= 0 && taskIndex < todos.length) {
      // Items copy
      const newTodos = [...todos];
      // Delete task from all todos tasks
      newTodos.splice(taskIndex, 1);

      // setTodos(newTodos);
      saveTodo(newTodos);
    }
  }

  const addNewTask = () => {
    // New Task info
    const newTask = { task: searchValue, checked: false };
    // Creating new todos based on the last ones and adding the new one
    // setTodos([...todos, newTask]);
    saveTodo([...todos, newTask]);
    // Setting as empty the search input
    setSearchValue('');
  }

  return (
    <AppUI
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      addNewTask={addNewTask}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchTodos={searchTodos}
      deleteTask={deleteTask}
      completeTask={completeTask}
    />
  )
}


export default App;
