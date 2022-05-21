import { EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import '../../styles/app.scss';

import theme from '@/utils/muiTheme';
import { Provider } from 'react-redux';
import store from '@/store';
import MainLayout from '@/components/MainLayout';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MainLayout title='Home'>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </Provider>
  );
}
