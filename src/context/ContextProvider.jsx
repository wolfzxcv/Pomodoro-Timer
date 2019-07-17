import React, { useState, createContext } from 'react';
import uuid from 'uuid';

export const ContextProvider = createContext();

// eslint-disable-next-line
export default props => {
  const [time, setTime] = useState(1500);
  const [anaCounter, setAnaCounter] = useState([]);
  const [isPlay, setIsPlay] = useState(false);
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [showActTodos, setShowActTodos] = useState(true);
  const [showComTodos, setShowComTodos] = useState(true);
  const [playTodo, setPlayTodo] = useState({
    id: '',
    title: `Let's work!`,
    completed: false,
  });

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
      setTime(1500);
      setPlayTodo(todos.find(todo => todo.id === id));
      setIsPlay(true);
    } else {
      return false;
    }
  };

  const playStopButton = id => {
    if (
      todos.filter(todo => todo.id.includes(playTodo.id))[0].id === id &&
      todos.filter(todo => todo.id.includes(playTodo.id))[0].completed === false
    ) {
      setIsPlay(!isPlay);
    } else {
      return false;
    }
  };

  const value = {
    time,
    setTime,
    anaCounter,
    setAnaCounter,
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
