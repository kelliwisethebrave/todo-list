import { useRef, useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodo] = useState('');

  const todoTitleInput = useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    {
      /*console.dir(event.target.title.value);
      console.dir(title);*/
    }
    //const title = event.target.title.value;
    onAddTodo(workingTodoTitle);
    //event.target.title.value = '';
    setWorkingTodo('');
    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input
        id="todoTitle"
        name="title"
        ref={todoTitleInput}
        value={workingTodoTitle}
        onChange={(event) => setWorkingTodo(event.target.value)}
      />
      <button disabled={!workingTodoTitle}>Add Todo</button>
    </form>
  );
}

export default TodoForm;
