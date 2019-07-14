import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const AppBar = () => {
  return (
    <Box width='48vw' height='20vh'>
      <div>AppBar 1</div>
      <div>AppBar 2</div>
      <Link to='/'>
        <div>ToDoList</div>
      </Link>
      <Link to='/analytics'>
        <div>Analytics</div>
      </Link>
      <Link to='/ringtones'>
        <div>Ringtones</div>
      </Link>
    </Box>
  );
};

export default AppBar;
