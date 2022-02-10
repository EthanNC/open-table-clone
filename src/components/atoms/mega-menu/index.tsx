import { Tab } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { ReactNode } from "react";

interface MegaMenuProps {}
const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
  },
];
const ListItem = ({item}) => (

  <li className="flex items-center ">
    <div>{item}</div>
    <ChevronRightIcon className=" w-5"/>
  </li>

)
function MegaMenu({}: MegaMenuProps) {
  return (
  <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ">
        {/* <div className="inline-grid bg-white px-7 grid-cols-8 grid-flow-col auto-cols-max ">
          <Tab.Group vertical>
          
          <div className=" bg-red-500 col-span-8">
          <Tab.List>
            <Tab><ListItem item="hello"/></Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tab.List>
          </div>
          <div className="bg-blue-500 col-span-8">
          <Tab.Panels>
            <Tab.Panel>Content</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
          </div>
        </Tab.Group>
        </div> */}
       <div className="bg-white p-2 flex-wrap bg-grey-light  ">
       <Tab.Group vertical>
       <div className="h-16 bg-red-500 w-full ">
       <Tab.List>
        <Tab><ListItem item="hello"/></Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
       </div>
      <div className="h-16 bg-blue-500 w-full ">
      <Tab.Panels>
        <Tab.Panel>Content</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
      </div>
      </Tab.Group>
   </div>


      <div className="p-4 bg-gray-50">
        <a
          href="##"
          className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <span className="flex items-center">
            <span className="text-sm font-medium text-gray-900">
              Documentation
            </span>
          </span>
          <span className="block text-sm text-gray-500">
            Start integrating products and tools
          </span>
        </a>
      </div>
    </div>
  );
}

export default MegaMenu;
