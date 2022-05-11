import React, {useContext} from 'react'
import '../stylesheets/todo search/TodoSearch.css';
import { TodoContext } from './context/TodoContext';

function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }
  return [
    <input key='search-bar' value={searchValue} placeholder='Search To Do by name' className='todo-search-input' onChange={handleChange} />
  ]
}

export { TodoSearch }