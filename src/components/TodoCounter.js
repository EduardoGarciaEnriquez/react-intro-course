import React, { useContext } from 'react'
import { TodoContext } from './context/TodoContext';
import '../stylesheets/todo counter/ToDoCounter.css';

function TodoCounter() {
    const {completedTodos, totalTodos} = useContext(TodoContext)
    return (
        <div className='todo-counter-container'>
        <h2>Your tasks</h2>
        {totalTodos > 0 ? (
            totalTodos === completedTodos ? (<h3>You've completed all to dos. Take the rest of the day</h3>):(<h3>Completed {completedTodos} to {totalTodos}</h3>)
        ):(<h3>Your to dos list is empty, click the button below to create a new one.</h3>)}
           
        </div>
    )
}

export {TodoCounter}