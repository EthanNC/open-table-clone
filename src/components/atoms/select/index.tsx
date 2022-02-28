import { ComponentType, SVGProps, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

interface SelectProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  data: Array<string>;
}

function Select({ Icon, data }: SelectProps) {
  const [selected, setSelected] = useState(data[0]);

  return (
    <div className='relative block text-left w-full'>
      <Listbox value={selected} onChange={setSelected}>
        <div>
          <Listbox.Button className='flex items-center justify-between px-4 py-2 focus:ring-2 ring-inset ring-blue-500 rounded-sm'>
            <Icon className='w-5 h-5 mr-1' />
            <div className='truncate'>{selected}</div>
            <ChevronDownIcon
              className='w-4 h-4 ml-2 -mr-1'
              aria-hidden='true'
            />
          </Listbox.Button>
        </div>

        <Listbox.Options className='absolute bg-white w-full h-56 overflow-scroll '>
          {data.map((person, personIdx) => (
            <Listbox.Option
              key={personIdx}
              className={({ active }) =>
                `${active ? 'text-white bg-blue-500' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
              }
              value={person}
            >
              {({ selected, active }) => (
                <>
                  <span
                    className={`${
                      selected ? 'font-medium' : 'font-normal'
                    } block truncate`}
                  >
                    {person}
                  </span>
                  {selected ? (
                    <span
                      className={`${
                        active ? 'text-amber-600' : 'text-amber-600'
                      }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                    ></span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default Select;
