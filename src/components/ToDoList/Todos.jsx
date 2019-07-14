import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const Todos = ({ id, title, completed }) => {
  return (
    <Box display='flex'>
      <Box border='1px solid red'>{id}</Box>
      <Box border='1px solid red'>{title}</Box>
      <Box border='1px solid red'>{completed}</Box>
    </Box>
  );
};

Todos.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todos;
