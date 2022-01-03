import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@src/style';
import defaultTheme from '@src/themes/defaultTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps}></Component>
    </ThemeProvider>
  );
}

export default MyApp;
