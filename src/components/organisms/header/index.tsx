import React from 'react';

import Logo from '@/components/atoms/logo';
import Link from 'next/link';
import {
  LocationMarkerIcon,
  MenuIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import Dropdown from '@/components/atoms/dropdown';
import MegaMenu from '@/components/atoms/mega-menu';
import Drawer from '@/components/molecules/drawer';
import SearchModal from '../../molecules/search-modal';

function Header() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openSearchModal, setOpenSearchModal] = React.useState(false);
  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-between gap-2 px-2'>
            <Link href='/'>
              <a>
                <Logo />
              </a>
            </Link>
            <div className='hidden md:inline-flex items-center'>
              <div className='inline-block h-6 w-[1px] bg-slate-200'></div>

              <Dropdown Icon={LocationMarkerIcon}>
                <MegaMenu />
              </Dropdown>
            </div>
          </div>
          {/* right sde */}
          <div className='flex items-center gap-2'>
            <a className=' cursor-pointer hidden md:block px-4 py-2 font-normal tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#247f9e] rounded-sm focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
              Sign up
            </a>
            <a className=' cursor-pointer hidden lg:block px-4 py-2 font-normal tracking-wide rounded-sm outline outline-1 outline-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
              Sign in
            </a>
            <div className='flex px-4 md:hidden '>
              <button
                type='button'
                className='inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md'
                onClick={() => setOpenDrawer(true)}
              >
                <span className='sr-only'>Close menu</span>
                <MenuIcon className='w-6 h-6' aria-hidden='true' />
              </button>
            </div>
            <Drawer open={openDrawer} setOpen={setOpenDrawer} />
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md cursor-pointer'
              onClick={() => setOpenSearchModal(true)}
            >
              <SearchIcon className='h-10 p-2 text-slate-800' />
            </button>
            <SearchModal open={openSearchModal} setOpen={setOpenSearchModal} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
