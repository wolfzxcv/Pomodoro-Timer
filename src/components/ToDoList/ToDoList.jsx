import React, { useContext } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Todos from './Todos';
import { ContextProvider } from '../../context/ContextProvider';

const ToDoList = () => {
  const { input, setInput, isError, todos, addTodo } = useContext(
    ContextProvider
  );
  console.log('input', input);
  console.log('todos', todos);

  return (
    <Box
      width='57vw'
      height='70vh'
      display='flex'
      justifyContent='space-around'
      alignItems='flex-start'
      border='1px solid red'
    >
      <StyledTodoList
        width='47vw'
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <form onSubmit={addTodo}>
          <Box
            width='45vw'
            display='flex'
            // eslint-disable-next-line
            border='1px solid #6A6868'
          >
            <InputBase
              fullWidth
              placeholder='ADD NEW MISSON...'
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <Box
              width='90px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              fontSize='48px'
            >
              +
            </Box>
          </Box>
        </form>
        <Box height='2rem' color='#f44336'>
          {isError && 'please enter more than 3 characters'}
        </Box>
        <Box>
          {todos.map(todo => (
            <Todos
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </Box>
      </StyledTodoList>
    </Box>
  );
};

const StyledTodoList = styled(Box)`
  form {
    color: #f44336;

    input {
      padding-left: 20px;
      font-size: 30px;
      height: 60px;
      ::placeholder {
        color: #f44336;
        opacity: 1;
      }
    }

    div:nth-child(2) {
      &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

export default ToDoList;
