import React, {useContext} from 'react'
import { TodoContext } from './context/TodoContext';
import '../stylesheets/create todo/CreateToDoButton.css';

function CreateTodoButton() {
  const {setShowModal, showModal} = useContext(TodoContext)
  const handleClick = () => {
    setShowModal(prevState => !prevState)
  }
  return (
    <button className='create-todo-btn' onClick={(handleClick)}>
      {showModal ? 'x' : '+'}
    </button>
  )
}

export {CreateTodoButton}