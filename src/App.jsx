import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(title) {
    const newTodo = {
      //can be just title since they have the same name
      title: title,
      id: Date.now(),
    };

    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
      <h1>My ToDos</h1>
      <TodoForm onAddTodo={addTodo} />
      {/*<p>{newTodo}</p> step one, to remove this*/}
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
