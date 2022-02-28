import { ComponentType, Fragment, ReactNode, SVGProps } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

interface DropdownProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  children: ReactNode;
  value?: string;
}

function Dropdown({ Icon, children, value }: DropdownProps) {
  return (
    <div className='w-full'>
      <Popover className='relative text-left'>
        {() => (
          <>
            <Popover.Button className='flex items-center px-4 gap-2 py-2 focus:ring-2 ring-inset ring-blue-500 rounded-sm'>
              <Icon className='w-6 h-6 ' />
              <div className='truncate'>{value}</div>
              <ChevronDownIcon
                className='w-4 h-4 ml-2 -mr-1'
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute z-50 w-screen max-w-[640px] px-4'>
                {children}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

export default Dropdown;
