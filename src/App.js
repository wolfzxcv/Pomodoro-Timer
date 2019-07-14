import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import ContextProvider from './context/ContextProvider';
import StyledComponentsButton from './StyledComponentsButton';
import theme from './theme/theme';

const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <>
            <GlobalStyle />
            <StyledComponentsButton />
          </>
        </ContextProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
