import React, { Fragment } from 'react';
import MainLayout from '@/components/MainLayout';
import Head from 'next/head';
import { Container } from '@mui/material';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Home | Pro360</title>
      </Head>

      <Container maxWidth='xl'>Home</Container>
    </Fragment>
  );
};

export default Home;
