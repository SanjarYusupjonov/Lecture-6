import React from 'react';

function ToDoList({ todos, toggleComplete, deleteTodo, startEditing }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.isComplete ? 'completed' : ''}>
          <span
            onClick={() => toggleComplete(todo.id)}
            className={`todo-text ${todo.isComplete ? 'todo-complete' : ''}`}
          >
            {todo.text}
          </span>
          <div>
            <button onClick={() => startEditing(todo)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
