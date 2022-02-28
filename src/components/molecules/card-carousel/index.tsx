import Card from '@/components/atoms/card';
import { Fragment } from 'react';
import { RestuarantProps } from 'src/util/constants';

interface CardCarouselProps {
  header: string;
  data: Array<RestuarantProps>;
}

function CardCarousel({ header, data }: CardCarouselProps) {
  return (
    <div className=' layout mt-10'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold '>{header}</h1>
        <a className='text-sm text-red-600'>View all</a>
      </div>
      <div className='inline-block h-[1px] w-full  bg-slate-200'></div>
      <div className='flex gap-4 overflow-x-auto min-w-[300px]'>
        {data.map((location, idx) => (
          <Fragment key={idx}>
            <Card data={location as unknown as RestuarantProps} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default CardCarousel;
