import React from 'react'
import '../stylesheets/todo item/TodoItem.css'

function TodoList(props) {
  return (
    <section className='todo-item-container'>
        <ul>
            {props.children}
        </ul>
    </section>
  )
}

export {TodoList}