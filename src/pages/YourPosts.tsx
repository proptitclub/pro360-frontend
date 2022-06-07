import { Container } from '@mui/material';
import Head from 'next/head';
import React, { Fragment } from 'react';

const YourPosts = () => {
  return (
    <Fragment>
      <Head>
        <title>YourPosts | Pro360</title>
      </Head>

      <Container maxWidth='xl'>YourPosts</Container>
    </Fragment>
  );
};

export default YourPosts;
