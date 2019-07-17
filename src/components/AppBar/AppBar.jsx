import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { ContextProvider } from '../../context/ContextProvider';

const AppBar = () => {
  const { setTime } = useContext(ContextProvider);
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
            onClick={() => setTime(1500)}
          >
            <Box marginRight='15px'>
              <i className='fas fa-bars' />
            </Box>
            <Box>POMODORO</Box>
          </StyledBox>
        </Link>

        <StyledBox
          fontSize='24px'
          fontWeight='bold'
          display='flex'
          padding='5px'
          onClick={() => setTime(300)}
        >
          <Box marginRight='15px'>
            <i className='fas fa-drum' />
          </Box>
          <Box>BREAK TIME</Box>
        </StyledBox>

        <Link to='/Pomodoro-Timer/ringtones'>
          <StyledBox
            fontSize='24px'
            fontWeight='bold'
            display='flex'
            padding='5px'
          >
            <Box marginRight='15px'>
              <i className='fas fa-music' />
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
