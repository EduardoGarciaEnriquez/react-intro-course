import React from 'react'

function TodoItem({text, completed, onComplete, onDelete}) {

    return (
        <li className='todo-item'>
            <span className={`check + ${completed && 'check-active'}`}
                onClick={onComplete}
            >
                ᄼ
            </span>
            <span className={`text  ${completed && 'text-active'}`}> {text} </span>
            <span
                className='delete'
                onClick={onDelete}
            >
                X
            </span>
        </li>
    )
}

export { TodoItem }