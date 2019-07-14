import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const Todos = ({ id, title, completed }) => {
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
        <Box marginRight='20px'>
          <i className='far fa-circle' />
        </Box>
        {title}
      </Box>
      <Box paddingRight='30px' fontSize='28px'>
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

export default Todos;
