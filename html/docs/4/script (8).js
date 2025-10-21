


import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    setTodos([...todos, text]);
    setText('');
  };

  return (
    <div style={{ margin: 40 }}>
      <h1>My To-Do List</h1>
      <form onSubmit={addTodo}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, i) =>
          <li key={i}>{todo}</li>
        )}
      </ul>
    </div>
  );
}

export default App;