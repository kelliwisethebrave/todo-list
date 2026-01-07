import TodoListItem from './TodoListItem';

function TodoList({ todoList, onCompleteTodo }) {
  const filteredTodoList = todoList.filter((todo) => !todo.isCompleted);

  /*const todos = [
    { id: 1, title: 'review resources' },
    { id: 2, title: 'take notes' },
    { id: 3, title: 'code out app' },
  ];*/

  return (
    <>
      {filteredTodoList.length === 0 ? (
        <p>Add todo above to get started</p>
      ) : (
        <ul>
          {filteredTodoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onCompleteTodo={onCompleteTodo}
            />
          ))}
        </ul>
      )}
      {/* the below is the original arrow function before being 
      converted to being used with the TodoListItem component
      
      <{todos.map(todo => <li key={todo.id}>{todo.title}</li>)}>*/}
    </>
  );
}

export default TodoList;
