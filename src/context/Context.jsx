import React, { useState, createContext } from 'react';
import uuid from 'uuid';

export const Context = createContext();

const ContextProvider = props => {
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
  const [ringtone, setRingtone] = useState('');

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
      setPlayTodo(todos.find(todo => todo.id === id));
      setIsPlay(!isPlay);
    } else {
      return false;
    }
  };

  const playAudio = () => {
    const sound = new Audio(ringtone);
    const playPromise = sound.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Automatic playback started!
          // Show playing UI.
          // console.log('audio played auto');
        })
        .catch(() => {
          // Auto-play was prevented
          // Show paused UI.
          console.log('playback prevented');
        });
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
    ringtone,
    setRingtone,
    playTodo,
    setPlayTodo,
    addTodo,
    toggleCompleted,
    showToDoTitle,
    playAudio,
  };

  return <Context.Provider value={value} {...props} />;
};

export default ContextProvider;
