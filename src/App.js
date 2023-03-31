import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
 
function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Ma Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Ajouter une tâche..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Ajouter</button>
      </div>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
