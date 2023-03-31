import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDeleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
