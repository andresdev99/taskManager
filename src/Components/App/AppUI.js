import { React, useContext } from 'react'
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../TodoButton/TodoButton';
import { LeftBar, RightBar } from '../Bars/Bars';
import { Container } from '../Container/Container';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';
import { TodoContext } from '../TodoContext/TodoContext';

const AppUI = () => {
    const {
        loading,
        error,
        searchTodos,
        completeTask,
        deleteTask
    } = useContext(TodoContext)
    return <>
        <Container>
            <LeftBar>
                <TodoSearch />
                <CreateTodoButton />
            </LeftBar>
            <RightBar>
                <TodoCounter />
                    <TodoList>
                        {loading && <TodosLoading />}
                        {error && <TodosError />}
                        {(!loading && searchTodos.length < 1) && <TodosEmpty />}
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
