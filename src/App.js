import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import StyledComponentsButton from './StyledComponentsButton';
import theme from './theme/theme';

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <StyledComponentsButton />
        </>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
