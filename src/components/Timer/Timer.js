import React from 'react';
import Box from '@material-ui/core/Box';
import icon from '../../image/pomodoro.svg';

const Timer = () => {
  return (
    <Box
      width='43vw'
      height='100vh'
      bgcolor='black'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Box position='fixed' top='200px' left='215px'>
        <img src={icon} alt='icon' />
      </Box>

      <Box
        width='220px'
        height='220px'
        borderRadius='50%'
        bgcolor='#BA000D'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          width='192px'
          height='192px'
          borderRadius='50%'
          bgcolor='#F44336'
          display='flex'
          justifyContent='center'
          alignItems='center'
          border='8px solid black'
        >
          <Box color='#FFFFFF' fontSize='50px' margin='10px'>
            <i className='fas fa-play' />
          </Box>
        </Box>
      </Box>

      <Box
        marginTop='20px'
        width='277px'
        height='90px'
        fontWeight='bold'
        fontSize='90px'
        color='#FFFFFF'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        25:00
      </Box>
      <Box
        marginTop='20px'
        width='304px'
        fontSize='30px'
        color='#FFFFFF'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        The first thing to do...
      </Box>
    </Box>
  );
};

export default Timer;
