import React, { useState, createContext } from 'react'
import { useLocalStorage } from './UseLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [showModal, setShowModal] = useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let filterTodos = [...todos];

    if (searchValue !== "") {
        filterTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    }


    const onComplete = (todoText) => {
        const newItem = [...todos];
        const todoIndex = todos.findIndex(todo => todo.text === todoText);
        if (newItem[todoIndex].completed) {
            newItem[todoIndex].completed = false;
        } else {
            newItem[todoIndex].completed = true;
        }
        saveTodos(newItem);
    }

    const onDelete = (todoText) => {
        if (window.confirm('Delete "' + todoText + '"?')) {
            const newItem = [...todos];
            const todoIndex = todos.findIndex(todo => todo.text === todoText);
            newItem.splice(todoIndex, 1);
            saveTodos(newItem);
        }
    }

    const onAdd = (text) => {
        const newItem = [...todos];
        newItem.push({
            completed: false,
            text: text
        })
        saveTodos(newItem)
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filterTodos,
            onComplete,
            onDelete,
            showModal,
            setShowModal,
            onAdd,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}
export { TodoContext, TodoProvider }