import Image from 'next/image';
import { StarIcon, CurrencyDollarIcon } from '@heroicons/react/solid';
import Rating from '../rating';
import { RestuarantProps } from 'src/util/constants';

function Card({ data }: Record<string, RestuarantProps>) {
  return (
    <div className='max-w-[280px] flex-shrink-0 bg-white rounded-sm dark:bg-gray-800 cursor-pointer transition duration-150 hover:-translate-y-1 ease-out hover:ease-in hover:shadow-md'>
      {/* left - image */}
      <div className='relative w-full mb-2 md:mb-0 sm:h-44 h-52'>
        <Image
          src={data.img}
          alt={data?.title}
          layout='fill'
          objectFit='cover'
          className='w-full rounded-t-sm'
          placeholder='blur'
          blurDataURL={data?.img}
          quality={40}
        />
      </div>

      {/* right - detail */}
      <div className='flex flex-col p-2 border'>
        {/* detail top */}
        <div className='flex-grow'>
          <h3 className='text-md font-bold truncate'>{data?.title}</h3>
          <div className='flex items-center gap-x-2'>
            <Rating
              Icon={StarIcon}
              numerator={4}
              denominator={5}
              className='text-red-500 h-6'
            />
            <span className='font-semibold text-md'>30 reviews</span>
          </div>
          <ul className=' list-inside flex items-center gap-x-1'>
            <li className='text-sm  truncate'>{data?.category}</li>
            <span>&bull;</span>
            <Rating
              Icon={CurrencyDollarIcon}
              numerator={4}
              denominator={5}
              className='text-black h-4'
            />
            <span>&bull;</span>
            <li className='text-sm  truncate'>{data?.location}</li>
          </ul>
        </div>

        {/* detail bottom */}
        <div className='flex justify-between order-first sm:order-none py-2'>
          <a className=' cursor-pointer hidden lg:block px-4 py-2 font-normal tracking-wide rounded-sm hover:outline-red-500 hover:outline-2 outline outline-1 outline-slate-300 focus:outline-none'>
            Order Online
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
