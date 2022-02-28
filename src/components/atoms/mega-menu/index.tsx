import { Tab } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';

const solutions = [
  {
    name: 'Atlanta / Georgia',
    link: [
      { name: 'All Atlanta / Georgia' },
      { name: 'Atlanta' },
      { name: 'Alpharetta / Roswell' },
      { name: 'Northwest Atlanta' },
      { name: 'Decatur' },
      { name: 'Northeast Atlanta' },
      { name: 'South Atlanta' },
      { name: 'Augusta' },
      { name: 'Macon' },
      { name: 'N. GA Mountains / Wine Country' },
      { name: 'Columbus' },
      { name: 'Swainsboro' },
      { name: 'Athens' },
      { name: 'Thomasville' },
      { name: 'Braselton' },
      { name: 'Pine Mountain' },
      { name: 'Statesboro' },
      { name: 'Southwest Georgia' },
      { name: 'Northeast Georgia' },
      { name: 'Northwest Georgia' },
    ],

    href: '##',
  },
  {
    name: 'Boston / New England',
    link: [
      { name: 'All Boston' },
      { name: 'New England' },
      { name: 'Boston' },
      { name: 'Cape Cod and the Islands' },
      { name: 'Rhode Island' },
      { name: 'Maine' },
      { name: 'Vermont' },
      { name: 'New Hampshire' },
      { name: 'Boston Suburbs' },
      { name: 'Central MA' },
      { name: 'Western MA' },
      { name: 'Southern MA' },
    ],
    href: '##',
  },
  {
    name: 'Chicago / Illinois',
    link: [
      { name: 'All Chicago / Illinois' },
      { name: 'Chicago' },
      { name: 'North Suburbs' },
      { name: 'South Suburbs' },
      { name: 'West Suburbs' },
      { name: 'Northwest Suburbs' },
      { name: 'Central Illinois' },
      { name: 'Galena' },
      { name: 'Southwest Suburbs' },
      { name: 'Northwest Indiana' },
      { name: 'Near West' },
      { name: 'Rockford' },
      { name: 'Southern Illinois' },
      { name: 'Rochelle' },
      { name: 'Thomson' },
      { name: 'Western Illinois' },
      { name: 'Northwest Illinois' },
      { name: 'DeKalb County' },
      { name: 'LaSalle County' },
    ],
    href: '##',
  },
];

function MegaMenu() {
  const [index, setIndex] = useState(1);
  return (
    <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
      <div className='relative grid bg-white p-4 grid-cols-2 grid-flow-col auto-cols-max'>
        <Tab.Group vertical onChange={setIndex}>
          <Tab.List className='flex flex-col justify-around gap-3 px-2'>
            {solutions.map((item, idx) => (
              <Tab
                className={
                  idx === index
                    ? 'flex items-center justify-between m-1 py-2 border-l-4 border-blue-400  bg-blue-100'
                    : 'flex items-center justify-between m-1 py-2 hover:border-l-4 hover:border-blue-400  hover:bg-blue-100'
                }
                key={item.name}
              >
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    {item.name}
                  </p>
                </div>
                <div className='flex items-center w-5 h-5 '>
                  <ChevronRightIcon />
                </div>
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className='flex flex-col justify-around gap-4'>
            {solutions[index].link.map((item) => (
              <Tab
                disabled
                key={item.name}
                className='flex items-center cursor-pointer justify-between py-2 -m-3 border-l hover:border-l-4 hover:border-blue-400  hover:bg-blue-100'
              >
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-600'>
                    {item.name}
                  </p>
                </div>
                <div className='flex items-center w-5 h-5 '>
                  <ChevronRightIcon />
                </div>
              </Tab>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className='p-4 bg-gray-50'>
        <a
          href='##'
          className='flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
        >
          <span className='flex items-center'>
            <span className='text-md text-blue-500'>Full list of Metros</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default MegaMenu;
