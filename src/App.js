import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null); 

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo, isComplete: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    setEditingTodo(null); 
  };

  const startEditing = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <ToDoForm 
        addTodo={addTodo} 
        editTodo={editTodo} 
        editingTodo={editingTodo} 
        setEditingTodo={setEditingTodo} 
      />
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        startEditing={startEditing} 
      />
    </div>
  );
}

export default App;
