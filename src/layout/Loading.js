import React from 'react';
import styled, { keyframes } from 'styled-components';
import Box from '@material-ui/core/Box';

const Loading = () => {
  return (
    <Box
      width='97vw'
      height='100vh'
      position='absolute'
      top='0'
      left='0'
      zIndex='modal'
    >
      <Box
        width='97vw'
        height='100vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Rotate>*</Rotate>
        <Box fontSize='30px'>Now Loading...</Box>
      </Box>
    </Box>
  );
};

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over 1 second
const Rotate = styled.div`
  width: 50px;
  height: 50px;
  font-weight: 700;
  animation: ${rotate} 0.5s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.5rem;
`;

export default Loading;
