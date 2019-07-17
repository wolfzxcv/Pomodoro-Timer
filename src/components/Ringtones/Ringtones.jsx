import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const Ringtones = () => {
  const [ringtone, setRingtone] = React.useState('');
  console.log(ringtone);
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
            CHOOSE A RINGTONE
          </Box>
          <Box marginRight='30px'>
            <ArrowDown />
          </Box>
        </Box>
        <Box marginLeft='30px'>
          <FormControl component='fieldset'>
            <RadioGroup
              aria-label='Ringtone'
              value={ringtone}
              onChange={e => setRingtone(e.target.value)}
            >
              <FormControlLabel
                value='None'
                control={<Radio color='default' />}
                label='None'
              />
              <FormControlLabel
                value='Beep'
                control={<Radio color='default' />}
                label='Beep'
              />
              <FormControlLabel
                value='Rådhuset'
                control={<Radio color='default' />}
                label='Rådhuset'
              />
              <FormControlLabel
                value='WonderfulLife'
                control={<Radio color='default' />}
                label='WonderfulLife'
              />
            </RadioGroup>
          </FormControl>
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

export default Ringtones;
