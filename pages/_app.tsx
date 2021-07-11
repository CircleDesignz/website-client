import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';
import { Global, css } from '@emotion/react';
import create from 'zustand';
import { globalTheme } from '../lib/themes/global.themes';

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export const useStore = create(() => ({
  authenticated: false,
}));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={globalTheme}>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
