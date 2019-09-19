import React, { useContext } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { Context } from '../../context/Context';
import beep from '../../ringtones/Beep.wav';

const Ringtone = () => {
  const { ringtone, setRingtone, playAudio } = useContext(Context);

  return (
    <Box
      width='57vw'
      height='70vh'
      display='flex'
      justifyContent='space-around'
      alignItems='flex-start'
    >
      <Box
        width='47vw'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <Hover
          width='45vw'
          bgcolor='black'
          color='white'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          onClick={() => window.history.back()}
        >
          <Box marginLeft='30px' fontSize='30px'>
            Back To List
          </Box>
        </Hover>

        <Box
          marginY='30px'
          width='45vw'
          height='35px'
          bgcolor='black'
          color='white'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box marginLeft='30px' fontSize='26px'>
            RINGTONE
          </Box>
          <Box marginRight='30px'>
            <ArrowDown />
          </Box>
        </Box>
        <Box marginLeft='30px'>
          <Hover
            marginBottom='15px'
            width='50px'
            onClick={() => setRingtone('')}
            bgcolor={ringtone === '' ? 'black' : 'white'}
            color={ringtone === '' ? 'white' : 'black'}
          >
            OFF
          </Hover>
          <Hover
            marginBottom='15px'
            width='50px'
            onClick={() => {
              setRingtone(beep);
              playAudio();
            }}
            bgcolor={ringtone === beep ? 'black' : 'white'}
            color={ringtone === beep ? 'white' : 'black'}
          >
            ON
          </Hover>
        </Box>
      </Box>
    </Box>
  );
};

const Hover = styled(Box)`
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.gray};
  }
`;

const ArrowDown = styled(Box)`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid ${props => props.theme.colors.white};
`;

export default Ringtone;
