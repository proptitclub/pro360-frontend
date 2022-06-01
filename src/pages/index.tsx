import { Box, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

import MyButton from '@/components/MyButton';
import WeekView from '@/components/WeekView';
import { useRef, useState } from 'react';
const Home: NextPage = () => {
  const [searchEvent, setSearchEvent] = useState('');
  const weekRef = useRef();
  return (
    <>
      <Head>
        <title>Home | Pro360</title>
      </Head>
      <Container maxWidth='xl'>
        <div
          onClick={() => weekRef.current.nextWeek()}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30px',
            height: '30px',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          {'>'}
        </div>
        <div
          onClick={() => weekRef.current.prevWeek()}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30px',
            height: '30px',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          {'<'}
        </div>
        <input
          value={searchEvent}
          onChange={(e) => setSearchEvent(e.target.value)}
        ></input>
        <button
          onClick={() => {
            weekRef.current.goToDate(searchEvent);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            weekRef.current.today();
          }}
        >
          today
        </button>
        <WeekView ref={weekRef}></WeekView>
      </Container>
    </>
  );
};

export default Home;
