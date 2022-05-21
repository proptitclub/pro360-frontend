import React, { Fragment } from 'react';
import MainLayout from '@/components/MainLayout';
import Head from 'next/head';
import { Container } from '@mui/material';

const Calendar = () => {
  return (
    <Fragment>
      <Head>
        <title>Calendar | Pro360</title>
      </Head>

      <Container maxWidth='xl'>Calendar</Container>
    </Fragment>
  );
};

export default Calendar;
