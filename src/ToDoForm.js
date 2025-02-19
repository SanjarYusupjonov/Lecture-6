import React, { useState, useEffect } from 'react';

function ToDoForm({ addTodo, editTodo, editingTodo, setEditingTodo }) {
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setTodoText(editingTodo.text);
    }
  }, [editingTodo]);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      editTodo(editingTodo.id, todoText);
    } else {
      addTodo(todoText);
    }
    setTodoText(''); 
    setEditingTodo(null); 
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={todoText}
        onChange={handleChange}
        placeholder="Enter a to-do"
        required
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        {editingTodo ? 'Save Edit' : 'Add Todo'}
      </button>
    </form>
  );
}

export default ToDoForm;
