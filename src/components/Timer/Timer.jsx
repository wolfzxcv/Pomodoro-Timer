import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import icon from '../../asset/pomodoro.svg';
import { ContextProvider } from '../../context/ContextProvider';

const Timer = () => {
  const { isPlay, setIsPlay, playTodo } = useContext(ContextProvider);

  const init = 1500;
  const [time, setTime] = useState(init);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const format = time => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
  };

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
          ) : (
            <PlayButton
              color='white'
              fontSize='50px'
              margin='10px'
              onClick={() => setIsPlay(!isPlay)}
            >
              <i className='fas fa-play' />
            </PlayButton>
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
        {format(time)}
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
        {playTodo}
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
