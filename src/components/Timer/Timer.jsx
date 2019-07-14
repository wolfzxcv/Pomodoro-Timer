import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import icon from '../../asset/pomodoro.svg';

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
      <Box position='fixed' top='200px' left='200px'>
        <img src={icon} alt='icon' />
      </Box>

      <BgRed
        width='220px'
        height='220px'
        borderRadius='50%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <BgOrange
          width='192px'
          height='192px'
          borderRadius='50%'
          display='flex'
          justifyContent='center'
          alignItems='center'
          border='8px solid black'
        >
          <Box color='white' fontSize='50px' margin='10px'>
            <i className='fas fa-play' />
          </Box>
        </BgOrange>
      </BgRed>

      <Box
        marginTop='20px'
        width='277px'
        height='90px'
        fontWeight='bold'
        fontSize='90px'
        color='white'
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
        color='white'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        The first thing to do...
      </Box>
    </Box>
  );
};

const BgRed = styled(Box)`
  background: ${props => props.theme.colors.red};
`;

const BgOrange = styled(Box)`
  background: ${props => props.theme.colors.orange};
`;

export default Timer;
