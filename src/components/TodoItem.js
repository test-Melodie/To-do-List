import React from 'react';

function TodoItem({ todo, onDeleteTodo, index }) {
  const handleDelete = () => {
    onDeleteTodo && onDeleteTodo(index);
  };

  return (
    <div className="todo-item">
      <span className="todo-text">{todo}</span>
      <button className="delete-button" onClick={handleDelete}>
        Supprimer
      </button>
    </div>
  );
}

export default TodoItem;
