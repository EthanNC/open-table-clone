import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@/components/organisms/hero';
import CardCarousel from '@/components/molecules/card-carousel';
import { RESTUARANTS } from 'src/util/constants';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Restaurants and Restaurant Reservations | OpenTable</title>
        <meta
          name='description'
          content='Restaurants and Restaurant Reservations | OpenTable'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <CardCarousel data={RESTUARANTS} header='Take the restaurant home' />
      <CardCarousel data={RESTUARANTS} header='Outdoor dining favorites' />
    </>
  );
};

export default Home;
