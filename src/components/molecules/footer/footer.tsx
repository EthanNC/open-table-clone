import { ChevronRightIcon } from '@heroicons/react/solid';

const Footer = (): JSX.Element => {
  return (
    <footer className='text-slate-100 bg-[#2d333f]'>
      <div className='container px-40 py-8 mx-auto'>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
          <div>
            <div className=' font-bold uppercase'>Discover</div>

            <a
              href='#'
              className='block mt-5 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Dining Rewards
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Private Dining
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Reserve for Others
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Cuisines Near Me
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Restaurants Near Me
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Delivery Near Me
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Cuisines
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Restaurants Open Now
            </a>
          </div>
          <div>
            <div className=' font-bold uppercase'>OpenTable</div>

            <a
              href='#'
              className='block mt-5 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              About Us
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Blog
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Careers
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Press
            </a>
          </div>

          <div>
            <div className=' font-bold uppercase'>More</div>

            <a
              href='#'
              className='block mt-5 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable for iOS
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable for Android
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Affiliate Program
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Contact Us
            </a>
          </div>

          <div>
            <div className=' font-bold uppercase'>Our Sites</div>

            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.jp
            </a>
            <a
              href='#'
              className='block mt-2 text-sm duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.de
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.es
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.ca
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.hk
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.ie
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.sg
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.nl
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.com.mx
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.co.uk
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.com.au
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.ae
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.co.th
            </a>
            <a
              href='#'
              className='block mt-2 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              OpenTable.it
            </a>
          </div>

          <div>
            <div className=' font-bold uppercase'>Businesses</div>

            <a className=' mt-2 hover:bg-gray-400 cursor-pointer bg-gray-500 flex rounded-sm py-2 items-center justify-around'>
              <span className=' text-sm font-semibold'>
                Delight more diners
              </span>
              <ChevronRightIcon className='w-5 justify-self-end' />
            </a>

            <a className=' mt-7 hover:bg-gray-400 cursor-pointer bg-gray-500 flex rounded-sm py-2 items-center justify-around'>
              <span className=' text-sm font-semibold'>
                Open for Buisness Blog
              </span>
              <ChevronRightIcon className='w-5 justify-self-end' />
            </a>
          </div>
        </div>
        <div>
          <div className='flex flex-wrap gap-x-4'>
            <a
              href='#'
              className='block mt-5 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Privacy Policy
            </a>
            <a
              href='#'
              className='block mt-5 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Terms of Use
            </a>
            <a
              href='#'
              className='block mt-5 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Cookies and Interest-Based Ads
            </a>
            <a
              href='#'
              className='block mt-5 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Do Not Sell My Info (California)
            </a>
            <a
              href='#'
              className='block mt-5 text-sm  duration-700 dark:text-gray-300 hover:text-white'
            >
              Cookies Settings
            </a>
          </div>

          <div>
            {' '}
            <a className='text-sm' href='https://github.com/EthanNC'>
              Copyright © {new Date().getFullYear()} . 1 Montgomery St Ste 700,
              San Francisco CA 94104 - All rights reserved. | Cloned by @EthanNC
              on Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
