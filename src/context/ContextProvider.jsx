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
  const [playTodo, setPlayTodo] = useState(`Let's work!`);

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

  const showToDoTitle = id => {
    if (!todos.find(todo => todo.id === id).completed) {
      setPlayTodo(todos.find(todo => todo.id === id).title);
      setIsPlay(!isPlay);
    } else {
      return false;
    }
  };

  const playStopButton = () => {
    if (todos.filter(todo => todo.title.includes(playTodo)).length > 0) {
      setIsPlay(!isPlay);
    } else {
      return setIsPlay(isPlay);
    }
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
    playTodo,
    setPlayTodo,

    addTodo,
    toggleCompleted,
    showToDoTitle,
    playStopButton,
  };

  return <ContextProvider.Provider value={value} {...props} />;
};
