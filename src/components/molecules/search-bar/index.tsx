import { SetStateAction, useState } from 'react';
import Calendar from 'react-calendar';
import Select from '@/components/atoms/select';
import 'react-calendar/dist/Calendar.css';
import {
  CalendarIcon,
  ClockIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import { PEOPLE, TIMES } from 'src/util/constants';
import Dropdown from '@/components/atoms/dropdown';
import { format } from 'date-fns';

const formatCheckDate = (date: Date, dateFormat?: string) => {
  if (!date) return '';
  return format(date, dateFormat || 'MMM d');
};

function SearchBar() {
  const [value, onChange] = useState(new Date());
  return (
    <div className='flex flex-wrap flex-shrink-0 gap-4 mt-4 justify-center'>
      <div className='relative bg-white items-center grid grid-cols-2  md:grid-cols-3 sm:grid-cols-1 z-10 outline-1 border rounded-ms  '>
        <Dropdown Icon={CalendarIcon} value={formatCheckDate(value)}>
          {({ close }: any) => (
            <Calendar
              onChange={(e: SetStateAction<Date>) => {
                onChange(e);
                close();
              }}
              value={value}
              minDate={new Date()}
            />
          )}
        </Dropdown>

        <Select Icon={ClockIcon} data={TIMES} />
        <Select Icon={UserIcon} data={PEOPLE} />
      </div>
      <div className='flex flex-wrap px-2 lg:w-[35%] w-1/2 relative bg-white items-center rounded-sm border '>
        <div className='flex justify-center'>
          <span className='px-1 '>
            <SearchIcon className='w-6 h-6' />
          </span>
        </div>
        <input
          type='text'
          className='flex-shrink focus:ring-transparent flex-grow leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none px-3 self-center relative placeholder:font-semibold'
          placeholder='Location, Restaurant, or Cuisine'
        />
      </div>
      <button className=' bg-red-500 text-white px-6 py-2 font-bold drop-shadow-lg rounded-sm'>
        {"Let's go"}
      </button>
    </div>
  );
}

export default SearchBar;
