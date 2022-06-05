import { Box, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

import MyButton from '@/components/MyButton';
import SideBarCalendar from '@/components/SidebarCalendar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Pro360</title>
      </Head>
      <Container maxWidth='xl'>
        <SideBarCalendar />
      </Container>
    </>
  );
};

export default Home;
