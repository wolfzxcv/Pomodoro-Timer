import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import theme from './theme';

const globalRules = `
  html {
    box-sizing: border-box;
    font-family: ${theme.fonts.main};
    color: ${theme.colors.black};
    background-color:${theme.colors.white};
    font-weight: 400;
    font-size: 20px;
  }

  body{
    margin: 0 auto;
    background-color: ${theme.colors.white};
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  button :focus{ 
    outline: none;
  }   
`;

const GlobalStyle = createGlobalStyle`${normalize} ${globalRules}`;

export default GlobalStyle;
