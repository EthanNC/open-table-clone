import React, { ReactNode } from "react";

import styles from "./styles.module.css";
import Logo from "@/components/atoms/logo";
import Link from "next/link";
import { LocationMarkerIcon, MenuIcon, SearchIcon } from "@heroicons/react/outline";
import Dropdown from "@/components/atoms/dropdown";
import MegaMenu from "@/components/atoms/mega-menu";
import Example from "@/components/Example";

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2 px-2">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <div className="inline-block h-6 w-[1px] bg-slate-200"></div>
            {/* <Dropdown Icon={LocationMarkerIcon}>
              <MegaMenu/>
            </Dropdown> */}
            <Example/>    
          </div>
          {/* right sde */}
          <div className="flex gap-2" >
            <a className=" cursor-pointer hidden md:block px-4 py-2 font-normal tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#247f9e] rounded-sm focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Sign up
            </a>
            <a className=" cursor-pointer hidden lg:block px-4 py-2 font-normal tracking-wide rounded-sm outline outline-1 outline-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Sign in 
            </a>
            <MenuIcon className="h-10 p-2 text-slate-800 block md:hidden"/>
            <SearchIcon className="h-10 p-2 text-slate-800" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
