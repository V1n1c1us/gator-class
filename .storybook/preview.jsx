import { ThemeProvider } from 'styled-components';
import defaultTheme from '../src/themes';
import {  GlobalStyle } from '../src/style';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
};
