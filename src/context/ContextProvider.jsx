import React, { useState, createContext } from 'react';
import uuid from 'uuid';

export const ContextProvider = createContext();

// eslint-disable-next-line
export default props => {
  const [isPlay, setIsPlay] = useState(false);
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [showActTodos, setShowActTodos] = useState(true);
  const [showComTodos, setShowComTodos] = useState(true);

  const addTodo = e => {
    e.preventDefault();
    if (input.trim().length < 3) {
      setIsError(true);
    } else {
      setIsError(false);
      const newTodo = { id: uuid.v4(), title: input, completed: false };
      setInput('');
      setTodos([...todos, newTodo]);
    }
  };

  const toggleCompleted = id => {
    const updateTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const value = {
    isPlay,
    setIsPlay,
    input,
    setInput,
    isError,
    setIsError,
    todos,
    setTodos,
    showActTodos,
    setShowActTodos,
    showComTodos,
    setShowComTodos,

    addTodo,
    toggleCompleted,
  };

  return <ContextProvider.Provider value={value} {...props} />;
};
