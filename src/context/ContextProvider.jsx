import React, { useState, createContext } from 'react';
import uuid from 'uuid';

export const ContextProvider = createContext();

// eslint-disable-next-line
export default props => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [isError, setIsError] = useState(false);

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

  const value = {
    input,
    setInput,
    isError,
    setIsError,
    todos,
    setTodos,
    addTodo,
  };

  return <ContextProvider.Provider value={value} {...props} />;
};
