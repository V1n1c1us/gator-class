import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html,
    body,
    #__next {
      position: relative;
    }
    body {
      background-color: ${theme.colors.white};
      font-family: 'Poppins', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }
  `}
`;

export default GlobalStyle;
