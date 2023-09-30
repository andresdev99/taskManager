import {React, useState, createContext} from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider({ children }) {

    // Search input data
    const [searchValue, setSearchValue] = useState('');
    const {
        items: todos,
        setItemToLocalStorage: saveTodo,
        loading,
        error
    } = useLocalStorage('todos',
        // [
        //   { task: 'Develop Software', checked: false },
        //   { task: 'Cook Breakfast', checked: false },
        //   { task: 'Study', checked: false },
        //   { task: 'Do tasks', checked: false },
        //   { task: 'Finish course', checked: false }
        // ]
        []
    );

    const [openModal, setOpenModal] = useState(false);

    // Todos Counter
    const completedTodos = todos.filter(todo => !!todo.checked).length;
    const totalTodos = todos.length

    // Filter Todos based on search
    const searchTodos = todos.filter(todo => {
        const todoText = todo.task.toLocaleLowerCase();
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

    const addNewTask = (newTaskName) => {
        // New Task info
        const newTask = { task: newTaskName, checked: false };
        // Creating new todos based on the last ones and adding the new one
        // setTodos([...todos, newTask]);
        saveTodo([...todos, newTask]);
        // Setting as empty the search input
        setSearchValue('');
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            searchValue,
            setSearchValue,
            addNewTask,
            completedTodos,
            totalTodos,
            searchTodos,
            deleteTask,
            completeTask,
            setOpenModal,
            openModal
        }}>
            { children }
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider }