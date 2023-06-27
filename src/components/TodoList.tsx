import React from 'react'
import './styles.css'
import { Todo } from '../model';

interface Props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}


function TodoList({todos, setTodos}:Props) {
  return (
    <div className='todos'>

    </div>
  )
}

export default TodoList