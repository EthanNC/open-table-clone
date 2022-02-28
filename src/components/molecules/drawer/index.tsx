import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { XIcon } from '@heroicons/react/outline';

interface DrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Drawer = ({ open, setOpen }: DrawerProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-y-0 right-0 z-40 flex lg:hidden w-1/2'
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-y-0 right-0 bg-black bg-opacity-100' />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='translate-x-full'
        >
          <div className='relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl'>
            <div className='flex px-4 pt-5 pb-2 self-end'>
              <button
                type='button'
                className='inline-flex items-center justify-center align-middle p-2 -m-2 text-gray-800 rounded-md'
                onClick={() => setOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XIcon className='w-6 h-6' aria-hidden='true' />
              </button>
            </div>

            {/* Links */}

            <div className='px-4 py-6 space-y-2 border-t border-gray-300'>
              <div className='flow-root'>
                <a
                  href='#'
                  className='block px-1 py-2 font-medium  bg-[#247f9e] text-white text-center text-sm  rounded-md'
                >
                  Sign Up
                </a>
              </div>
              <div className='flow-root'>
                <a
                  href='#'
                  className='block px-1 py-2 font-medium outline outline-1 outline-slate-300 text-center text-sm rounded-md'
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Drawer;
