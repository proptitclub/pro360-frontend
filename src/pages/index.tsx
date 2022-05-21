import MainLayout from '@/components/MainLayout';
import { Container } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home | Pro360</title>
      </Head>

      {/* <MainLayout title='' /> */}
      <Container maxWidth='xl'>Home</Container>
    </Fragment>
  );
};

export default Home;
