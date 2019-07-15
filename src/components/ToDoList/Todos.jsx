import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { ContextProvider } from '../../context/ContextProvider';

const Todos = ({ id, title, completed }) => {
  const { toggleCompleted, showToDoTitle } = useContext(ContextProvider);

  return (
    <StyledTodos
      width='45vw'
      height='60px'
      fontSize='24px'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box paddingLeft='20px'>
        <Box marginRight='20px' onClick={() => toggleCompleted(id)}>
          {completed ? (
            <i className='far fa-check-circle' />
          ) : (
            <i className='far fa-circle' />
          )}
        </Box>
        {completed ? <LineThrough>{title}</LineThrough> : <Box>{title}</Box>}
      </Box>
      <Box
        paddingRight='30px'
        fontSize='28px'
        onClick={() => showToDoTitle(id)}
      >
        <i className='far fa-play-circle' />
      </Box>
    </StyledTodos>
  );
};

Todos.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

const StyledTodos = styled(Box)`
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  div {
    height: 60px;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
`;

const LineThrough = styled(Box)`
  text-decoration: line-through;
`;

export default Todos;
