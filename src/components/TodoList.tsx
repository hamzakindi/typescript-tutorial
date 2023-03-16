import React from 'react'
import Todo from './model'
import "./styles.css"

interface Props{
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const TodoList:React.FC<Props> = ({todos, setTodos}:Props) => {
  return (
    <div>
      {todos.map(todo => (<li>{todo.todo}</li>))}
    </div>
  )
}

interface Props{
    todos:Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default TodoList;