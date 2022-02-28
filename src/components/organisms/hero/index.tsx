import Image from 'next/image';
import styles from './styles.module.css';
import SearchBar from '@/components/molecules/search-bar';

function Hero() {
  return (
    <section className='relative  md:h-[45vh] bg-slate-800'>
      <div className={styles.image}>
        <Image
          src='/assets/hero.jpg'
          layout='fill'
          objectFit='cover'
          alt='hero'
          placeholder='blur'
          blurDataURL='/assets/hero.jpg'
          quality={50}
        />
      </div>

      <div className=' max-w-[1000px] py-20 mx-auto lg:h-128 lg:py-40  '>
        <h1 className='relative mx-auto px-4 text-4xl font-bold tracking-wide text-center md:px-0 text-white xl:text-5xl'>
          Find your table for any occasion
        </h1>
        <SearchBar />
      </div>
    </section>
  );
}

export default Hero;
