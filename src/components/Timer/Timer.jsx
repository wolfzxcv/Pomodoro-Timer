import React, { useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Box from '@material-ui/core/Box';
import icon from '../../asset/pomodoro.svg';
import { Context } from '../../context/Context';

const Timer = () => {
  const { time, setTime, isPlay, playTodo, setIsPlay, playAudio } = useContext(
    Context
  );
  console.log(time);
  const format = time => {
    if (time > 0) {
      let seconds = time % 60;
      let minutes = Math.floor(time / 60);
      minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
      seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;
      return minutes + ':' + seconds;
    } else if (time === 0) {
      playAudio();
      return '00:00';
    } else {
      return '00:00';
    }
  };

  useEffect(() => {
    let id;
    if (isPlay) {
      id = setInterval(() => {
        setTime(prevTime => prevTime - 1);
        document.title = `(${format(time - 1)}) Pomodoro Timer`;
      }, 1000);
    }
    return () => {
      if (id) clearInterval(id);
    };
  }, [isPlay, format(time - 1)]);

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
                onClick={() => {
                  if (playTodo.title === `Let's work!`) {
                    return false;
                  } else {
                    setIsPlay(!isPlay);
                  }
                }}
              >
                <i className='fas fa-stop' />
              </StopButton>
            </Box>
          ) : (
            <PlayButton
              color='white'
              fontSize='50px'
              margin='10px'
              onClick={() => {
                if (playTodo.title === `Let's work!`) {
                  return false;
                } else {
                  setIsPlay(!isPlay);
                }
              }}
            >
              <i className='fas fa-play' />
            </PlayButton>
          )}
        </BgOrange>
      </BgRed>

      {time >= 0 ? (
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
      ) : (
        <FlickeringTime
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
        </FlickeringTime>
      )}
      <Box
        marginTop='20px'
        width='304px'
        fontSize='30px'
        color='white'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        {playTodo.title}
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

const flicker = keyframes`
   0%   { opacity:1; }
   50%  { opacity:0; }
   100% { opacity:1; }
`;

const FlickeringTime = styled(Box)`
  animation: ${flicker} 1s linear infinite;
`;

export default Timer;
