import React, { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext';

function TodoForm() {
    const [ addTodoValue, setAddTodoValue ] = useState('');
    const { onAdd, setShowModal } = useContext(TodoContext);

    const onCancel = () => {
        setAddTodoValue('')
        setShowModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(addTodoValue)
        setShowModal(false);
    }

    const onChange = (e) => {
        setAddTodoValue(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <textarea value={addTodoValue} onChange={onChange} cols="30" rows="5" placeholder='Write new todo here'/>
            <div>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button type='subit'>Add todo</button>
            </div>
        </form>
    )
}

export { TodoForm }