import { Popover, Tab, Transition } from "@headlessui/react";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";

const solutions = [
  {
    name: "Atlanta / Georgia",
    link: [
      { name: "All Atlanta / Georgia" },
      { name: "Atlanta" },
      { name: "Alpharetta / Roswell" },
      { name: "Northwest Atlanta" },
      { name: "Decatur" },
      { name: "Northeast Atlanta" },
      { name: "South Atlanta" },
      { name: "Augusta" },
      { name: "Macon" },
      { name: "N. GA Mountains / Wine Country" },
      { name: "Columbus" },
      { name: "Swainsboro" },
      { name: "Athens" },
      { name: "Thomasville" },
      { name: "Braselton" },
      { name: "Pine Mountain" },
      { name: "Statesboro" },
      { name: "Southwest Georgia" },
      { name: "Northeast Georgia" },
      { name: "Northwest Georgia" },
    ],

    href: "##",
  },
  {
    name: "Boston / New England",
    link: [
      { name: "All Boston" },
      { name: "New England" },
      { name: "Boston" },
      { name: "Cape Cod and the Islands" },
      { name: "Rhode Island" },
      { name: "Maine" },
      { name: "Vermont" },
      { name: "New Hampshire" },
      { name: "Boston Suburbs" },
      { name: "Central MA" },
      { name: "Western MA" },
      { name: "Southern MA" },
    ],
    href: "##",
  },
  {
    name: "Chicago / Illinois",
    link: [
      {name:"All Chicago / Illinois"},
      {name:"Chicago"},
      {name:"North Suburbs"},
      {name:"South Suburbs"},
      {name:"West Suburbs"},
      {name:"Northwest Suburbs"},
      {name:"Central Illinois"},
      {name:"Galena"},
      {name:"Southwest Suburbs"},
      {name:"Northwest Indiana"},
      {name:"Near West"},
      {name:"Rockford"},
      {name:"Southern Illinois"},
      {name:"Rochelle"},
      {name:"Thomson"},
      {name:"Western Illinois"},
      {name:"Northwest Illinois"},
      {name:"DeKalb County"},
      {name:"LaSalle County"},
    ],
    href: "##",
  },
];

export default function Example() {
  const [index, setIndex] = useState(1)
  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center px-4 gap-2 py-2 focus:ring-2 ring-inset ring-blue-500 rounded-sm">
              <LocationMarkerIcon className="w-6 h-6 " />
              {/* <div>{value}</div> */}
              <ChevronDownIcon
                className="w-4 h-4 ml-2 -mr-1"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-50 w-screen max-w-[640px] px-4 ">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid bg-white p-4 grid-cols-2 grid-flow-col auto-cols-max">
                    <Tab.Group
                     vertical 
                     onChange={setIndex}>
                      <Tab.List className="flex flex-col justify-around gap-3 px-2">
                        {solutions.map((item, idx) => (
                          <Tab
                            className={idx === index ? "flex items-center justify-between m-1 py-2 border-l-4 border-blue-400  bg-blue-100": "flex items-center justify-between m-1 py-2 hover:border-l-4 hover:border-blue-400  hover:bg-blue-100" }
                            key={item.name}
                          >
                          
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-600">
                                {item.name}
                              </p>
                            </div>
                            <div className="flex items-center w-5 h-5 ">
                              <ChevronRightIcon />
                            </div>
                          </Tab>
                        ))}
                      </Tab.List>

                      <Tab.Panels className="flex flex-col justify-around gap-4">
                        {solutions[index].link.map((item) => (
                          
                            <Tab disabled key={item.name} className="flex items-center cursor-pointer justify-between py-2 -m-3 border-l hover:border-l-4 hover:border-blue-400  hover:bg-blue-100">
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">
                                  {item.name}
                                </p>
                              </div>
                              <div className="flex items-center w-5 h-5 ">
                                <ChevronRightIcon />
                              </div>
                            </Tab>
                         
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <a
                      href="##"
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-md text-blue-500">
                          Full list of Metros
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
