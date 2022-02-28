import { Transition, Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';
import SearchBar from '../search-bar';

interface SearchModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchModal({ open, setOpen }: SearchModalProps) {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-x-0 top-0 z-10 '
          onClose={setOpen}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-black opacity-40' />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className=' w-full my-8 align-middle transition-all transform bg-white shadow-xl rounded-2x'>
                <div className='flex px-4 pt-5 pb-2 float-right'>
                  <button
                    type='button'
                    className='  p-2 -m-2 text-gray-800 rounded-md'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='w-7 h-6' aria-hidden='true' />
                  </button>
                </div>

                <div className=' max-w-[1000px] py-20 mx-auto lg:h-128 lg:py-40  '>
                  <h1 className='relative mx-auto px-4 text-4xl font-bold tracking-wide text-center md:px-0  xl:text-5xl'>
                    Find your table for any occasion
                  </h1>
                  <SearchBar />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default SearchModal;
