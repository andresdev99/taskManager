import './App.css';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoSearch } from './Components/TodoSearch/TodoSearch';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoItem } from './Components/TodoItem/TodoItem';
import { CreateTodoButton } from './Components/TodoButton/TodoButton';
import { LeftBar, RightBar } from './Components/Bars/Bars';
import { Container } from './Components/Container/Container';
import { React, useState } from 'react'


function App() {
  // Search input data
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(
    // Default tasks
    [
      { task: 'Develop Software', checked: true },
      { task: 'Cook Breakfast', checked: false },
      { task: 'Study', checked: true },
      { task: 'Do tasks', checked: false },
      { task: 'Finish course', checked: true }
    ]
  );

  // Todos Counter
  const completedTodos = todos.filter(todo => !!todo.checked).length;
  const totalTodos = todos.length

  // Filter Todos based on search
  const searchTodos = todos.filter(todo => {
    const todoText = todo.task.toLocaleLowerCase();
    const searchTask = searchValue.toLocaleLowerCase();
    return todoText.includes(searchTask)
  });

  const addNewTask = () => {
    // New Task info
    const newTask = { task: searchValue, checked: false };
    // Creating new todos based on the last ones and adding the new one
    setTodos([...todos, newTask]);
    // Setting as empty the search input
    setSearchValue('');
  }

  const deleteTask = (taskIndex) => {
    // Check that the index is between the todos range
    if (taskIndex >= 0 && taskIndex < todos.length) {
      // Todos copy
      const newTodos = [...todos];
      // Delete task from all todos tasks
      newTodos.splice(taskIndex, 1);
      setTodos(newTodos);
    }
  }

  const completeTask = (taskIndex) => {
    // Check that the index is between the todos range
    if (taskIndex >= 0 && taskIndex < todos.length) {
      // Todos copy
      const newTodos = [...todos];
      // Delete task from all todos tasks
      newTodos[taskIndex].checked = !newTodos[taskIndex].checked;
      setTodos(newTodos);
    }
  }


  return <>
    <Container>
      <LeftBar>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <CreateTodoButton addNewTask={addNewTask} />
      </LeftBar>
      <RightBar>
        <TodoCounter
          completed={completedTodos}
          total={totalTodos}
        />
        <TodoList>
          {searchTodos.map(({ task, checked }, index) => (
            <TodoItem
              key={index}
              task={task}
              checked={checked}
              deleteTask={() => deleteTask(index)}
              completeTask={() => completeTask(index)}
            />
          ))}
        </TodoList>
      </RightBar>
    </Container>
  </>
}


export default App;
