import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

const AppBar = () => {
  return (
    <Box
      paddingBottom='100px'
      width='57vw'
      height='20vh'
      display='flex'
      justifyContent='space-around'
      alignItems='flex-end'
    >
      <Box
        width='47vw'
        height='30px'
        display='flex'
        justifyContent='space-between'
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
    </Box>
  );
};

const StyledBox = styled(Box)`
  &:hover {
    color: ${props => props.theme.colors.orange};
    border-bottom: 3px solid ${props => props.theme.colors.orange};
  }
`;

export default AppBar;
