import React, { useContext } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Todos from './Todos';
import { Context } from '../../context/Context';

const ToDoList = () => {
  const {
    input,
    setInput,
    isError,
    todos,
    addTodo,
    showActTodos,
    setShowActTodos,
    showComTodos,
    setShowComTodos,
  } = useContext(Context);

  return (
    <Box
      width='57vw'
      height='70vh'
      display='flex'
      justifyContent='space-around'
      alignItems='flex-start'
    >
      <StyledTodoList
        width='47vw'
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <form onSubmit={addTodo}>
          <BorderColor width='45vw' display='flex'>
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
              onClick={addTodo}
            >
              +
            </Box>
          </BorderColor>
        </form>
        <TextColor height='2rem'>
          {isError && 'please enter more than 3 characters'}
        </TextColor>
        <Box width='45vw' display='flex' flexDirection='column'>
          <Box
            width='45vw'
            height='35px'
            bgcolor='black'
            color='white'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Box marginLeft='30px' fontSize='28px'>
              To-Do
            </Box>

            <Box
              onClick={() => setShowActTodos(!showActTodos)}
              marginRight='30px'
            >
              {showActTodos &&
              todos.filter(todo => todo.completed === false).length > 0 ? (
                <ArrowDown />
              ) : (
                <ArrowUp />
              )}
            </Box>
          </Box>

          {showActTodos &&
            todos
              .filter(todo => todo.completed === false)
              .map(todo => (
                <Todos
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                />
              ))}

          <Box
            marginTop='30px'
            width='45vw'
            height='35px'
            bgcolor='black'
            color='white'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Box marginLeft='30px' fontSize='26px'>
              DONE
            </Box>
            <Box
              onClick={() => setShowComTodos(!showComTodos)}
              marginRight='30px'
            >
              {showComTodos &&
              todos.filter(todo => todo.completed === true).length > 0 ? (
                <ArrowDown />
              ) : (
                <ArrowUp />
              )}
            </Box>
          </Box>

          {showComTodos &&
            todos
              .filter(todo => todo.completed === true)
              .map(todo => (
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
    color: ${props => props.theme.colors.orange};

    input {
      padding-left: 20px;
      font-size: 30px;
      height: 60px;
      ::placeholder {
        color: ${props => props.theme.colors.orange};
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

const TextColor = styled(Box)`
  color: ${props => props.theme.colors.orange};
`;

const BorderColor = styled(Box)`
  border: 1px solid ${props => props.theme.colors.gray};
`;

const ArrowDown = styled(Box)`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid ${props => props.theme.colors.white};
  &:hover {
    cursor: pointer;
  }
`;

const ArrowUp = styled(Box)`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid ${props => props.theme.colors.white};
  &:hover {
    cursor: pointer;
  }
`;

export default ToDoList;
