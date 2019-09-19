import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import Box from '@material-ui/core/Box';
import GlobalStyle from './theme/globalStyle';
import ContextProvider from './context/Context';
import theme from './theme/theme';
import Timer from './components/Timer/Timer';
import Routes from './layout/Routes';

const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <Box width='100vw' height='100vh' display='flex'>
            <GlobalStyle />
            <Timer />
            <Routes />
          </Box>
        </ContextProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
