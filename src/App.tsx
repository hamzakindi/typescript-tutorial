/**
 * This is the tutorial I am following for this project:
 * https://youtu.be/FJDVKeh7RJI?t=4967
 * Use reducer hook shopping cart tutorial: https://www.youtube.com/watch?v=HptuMAUaNGk
 * To merge the pull request, I need to be on the branch where I created the pull request. 
 * That is where I will find the pull request in vscode.
 * This app is using react beautiful dnd.
 */
import React, { useState } from 'react';
import InputField from './components/InputField';

import './App.css';
import Todo from './components/model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {
        id: Date.now(), todo: todo, isDone: false,
        handleAdd: handleAdd
      }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {

    const { source, destination } = result;
    if (!destination)
      return;
    if (destination.droppableId === source.droppableId
      && destination.index === source.index)
      return;
    let add,
      active = todos,
      complete = completedTodos;
    if (source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setTodos(active);
    setCompletedTodos(complete);
    // console.log(result);

    // if (!result.destination) return;
    // const items = result.destination.droppableId === 'TodosRemove'? 
    //   Array.from(todos) :Array.from(completedTodos);
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);
    // //console.log(reorderedItem);
    // if (result.destination.droppableId === 'TodosRemove'){
    //   console.log(reorderedItem);
    //   setCompletedTodos([...completedTodos, 
    //     { id: reorderedItem.id, todo: reorderedItem.todo, isDone: false, handleAdd: reorderedItem.handleAdd }]);
    //   setTodos(todos.filter(todo => todo.id !== reorderedItem.id));
    // }else{
    //   setTodos([...todos, { id: reorderedItem.id, todo: reorderedItem.todo, isDone: false, handleAdd: reorderedItem.handleAdd }]);
    //   setCompletedTodos(completedTodos.filter(todo => todo.id !== reorderedItem.id));
    // }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className='heading'>Taskify</span>
        <InputField todo={todo} setTodo={setTodo}
          handleAdd={handleAdd} />
        <TodoList todos={todos} key="todosParent"
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        ></TodoList>
      </div>
    </DragDropContext>
  );
}

export default App;
