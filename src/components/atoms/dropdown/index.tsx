import { ComponentType, ReactNode, SVGProps } from "react";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import styles from "./styles.module.css";

interface DropdownProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  children: ReactNode;
  value?: string;
}

function Dropdown({ Icon, children, value }: DropdownProps) {
  return (
    <div className="w-full">
    <Popover className="relative text-left">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center px-4 gap-2 py-2 focus:ring-2 ring-inset ring-blue-500 rounded-sm">
            <Icon className="w-6 h-6 " />
            <div>{value}</div>
            <ChevronDownIcon
              className="w-4 h-4 ml-2 -mr-1"
              aria-hidden="true"
            />
          </Popover.Button>
          <Popover.Panel className="absolute z-50 w-screen max-w-sm px-4">
            {children}
          </Popover.Panel>
        </>
      )}
    </Popover>
    </div>
  );
}

export default Dropdown;
