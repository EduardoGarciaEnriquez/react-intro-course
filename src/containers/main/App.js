import React, { useContext } from 'react';

import { TodoCounter } from '../../components/TodoCounter';
import { TodoItem } from '../../components/TodoItem';
import { TodoList } from '../../components/TodoList';
import { CreateTodoButton } from '../../components/CreateTodoButton';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoContext } from '../../components/context/TodoContext';
import { Modal } from '../../components/Modal/Modal';
import { TodoForm } from '../../components/Modal/TodoForm';

function App() {
  const { error, loading, filterTodos, onComplete, onDelete, showModal } = useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p style={{ color: 'red', textAlign:'center' }}>Error! Couldn't load items list. Try again</p>}
        {loading && <div className='loader'></div>}
        {filterTodos.map(todo => (
          <TodoItem key={todo.text + todo.key} text={todo.text} completed={todo.completed} onComplete={() => onComplete(todo.text)} onDelete={() => onDelete(todo.text)} />
        ))}
      </TodoList>
      {
        showModal &&
        <Modal>
          <div className='modal-content'>
            <h2>Create new todo</h2>
            <TodoForm/>
          </div>
        </Modal>
      }
      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
