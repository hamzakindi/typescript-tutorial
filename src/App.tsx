/**
 * This is the tutorial I am following for this project:
 * https://youtu.be/FJDVKeh7RJI?t=4050
 * Use reducer hook shopping cart tutorial: https://www.youtube.com/watch?v=HptuMAUaNGk
 * 
 */
import React, { useState } from 'react';
import InputField from './components/InputField';

import './App.css';
import Todo from './components/model';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {
        id: Date.now(), todo: todo, isDone: false,
        handleAdd: handleAdd
      }]);
      setTodo("");
    }
  }
  console.log(todos);

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;
