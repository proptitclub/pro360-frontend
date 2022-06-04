import { Box, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

import MyButton from '@/components/MyButton';
import SideBarCalendar from '@/components/SideBarCalendar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Pro360</title>
      </Head>
      <Container maxWidth='xl'>
        <Box>
          <Typography variant='h1' textAlign='center'>
            Welcome to ProPTIT
          </Typography>
        </Box>
        <Box>
          <Typography variant='h4'>Đây là Pro360</Typography>
          <MyButton variant='outlined' text='Get Started' />
        </Box>
        <SideBarCalendar />
      </Container>
    </>
  );
};

export default Home;
