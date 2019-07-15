import React, { useContext } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import icon from '../../asset/pomodoro.svg';
import { ContextProvider } from '../../context/ContextProvider';

const Timer = () => {
  const { isPlay, setIsPlay } = useContext(ContextProvider);
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
          {isPlay ? (
            <PlayButton
              color='white'
              fontSize='50px'
              margin='10px'
              onClick={() => setIsPlay(!isPlay)}
            >
              <i className='fas fa-play' />
            </PlayButton>
          ) : (
            <Box
              width='180px'
              height='180px'
              borderRadius='50%'
              display='flex'
              justifyContent='center'
              alignItems='center'
              bgcolor='white'
            >
              <StopButton
                fontSize='50px'
                margin='10px'
                onClick={() => setIsPlay(!isPlay)}
              >
                <i className='fas fa-stop' />
              </StopButton>
            </Box>
          )}
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

const PlayButton = styled(Box)`
  &:hover {
    cursor: pointer;
  }
`;

const StopButton = styled(Box)`
  color: ${props => props.theme.colors.orange};
  &:hover {
    cursor: pointer;
  }
`;

export default Timer;
