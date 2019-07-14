import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

const AppBar = () => {
  return (
    <Box
      width='57vw'
      height='30vh'
      display='flex'
      justifyContent='space-around'
      alignItems='center'
    >
      <Link to='/Pomodoro-Timer/'>
        <StyledBox
          fontSize='24px'
          fontWeight='bold'
          display='flex'
          padding='5px'
        >
          <Box marginRight='15px'>
            <i className='fas fa-bars' />
          </Box>
          <Box>TO DO LIST</Box>
        </StyledBox>
      </Link>
      <Link to='/Pomodoro-Timer/analytics'>
        <StyledBox
          fontSize='24px'
          fontWeight='bold'
          display='flex'
          padding='5px'
        >
          <Box marginRight='15px'>
            <i className='fas fa-bullseye' />
          </Box>
          <Box>ANALYTICS</Box>
        </StyledBox>
      </Link>
      <Link to='/Pomodoro-Timer/ringtones'>
        <StyledBox
          fontSize='24px'
          fontWeight='bold'
          display='flex'
          padding='5px'
        >
          <Box marginRight='15px'>
            <i className='fas fa-cog' />
          </Box>
          <Box>RINGTONES</Box>
        </StyledBox>
      </Link>
    </Box>
  );
};

const StyledBox = styled(Box)`
  &:hover {
    color: #f44336;
    border-bottom: 3px solid #f44336;
  }
`;

export default AppBar;
