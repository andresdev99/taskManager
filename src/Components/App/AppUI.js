import { React, useState, useEffect } from 'react'
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../TodoButton/TodoButton';
import { LeftBar, RightBar } from '../Bars/Bars';
import { Container } from '../Container/Container';

const AppUI = ({
    searchValue,
    setSearchValue,
    addNewTask,
    completedTodos,
    totalTodos,
    searchTodos,
    deleteTask,
    completeTask
}) => {
    
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
                    {
                        searchTodos.map(({ task, checked }, index) => (
                            <TodoItem
                                key={index}
                                task={task}
                                checked={checked}
                                deleteTask={() => deleteTask(index)}
                                completeTask={() => completeTask(index)}
                            />
                        ))
                    }
                </TodoList>
            </RightBar>
        </Container>
    </>
}

export { AppUI }
