import React from 'react';
import Box from '@material-ui/core/Box';

const Ringtones = () => {
  return (
    <Box
      width='57vw'
      height='70vh'
      display='flex'
      justifyContent='space-around'
      alignItems='flex-start'
      border='1px solid red'
    >
      <Box
        width='47vw'
        display='flex'
        justifyContent='space-between'
        border='1px solid red'
      >
        <div>Ringtones 1</div>
        <div>Ringtones 2</div>
      </Box>
    </Box>
  );
};

export default Ringtones;
