import { ReactNode, SetStateAction, useState } from "react";

import styles from "./styles.module.css";
import Calendar from "react-calendar";
import Select from "@/components/atoms/select";
import "react-calendar/dist/Calendar.css";
import {
  CalendarIcon,
  ClockIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { PEOPLE, TIMES } from "src/util/constants";
import Dropdown from "@/components/atoms/dropdown";
import { format } from "date-fns";

const formatCheckDate = (date: Date, dateFormat?: string) => {
  if (!date) return "";
  return format(date, dateFormat || "MMM d");
};
interface SearchBarProps {}

function SearchBar({}: SearchBarProps) {
  const [value, onChange] = useState(new Date());
  return (
    <div className="max-w-[1000px] mx-auto mt-4 flex flex-grow gap-2 ">
      <div className="w-1/2 bg-white inline-flex justify-evenly items-center rounded-sm ">
        <Dropdown Icon={CalendarIcon} value={formatCheckDate(value)}>
          {({ close }) => (
            <Calendar
              className={styles.calender}
              onChange={(e: SetStateAction<Date>) => {
                onChange(e);
                close();
              }}
              value={value}
              minDate={new Date()}
            />
          )}
        </Dropdown>
        <Select Icon={ClockIcon} data={TIMES} />
        <Select Icon={UserIcon} data={PEOPLE} />
      </div>
      <div className="inline-flex flex-wrap w-[35%] relative bg-white items-center rounded-sm ">
        <div className="flex justify-center">
          <span className="px-3 ">
            <SearchIcon className="w-6 h-6" />
          </span>
        </div>
        <input
          type="text"
          className="flex-shrink focus:ring-transparent flex-grow leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none px-3 self-center relative outline-none placeholder:font-semibold"
          placeholder="Location, Restaurant, or Cuisine"
        />
      </div>
      <button className=" bg-red-500 text-white w-[15%] font-bold drop-shadow-lg rounded-md">
        {"Let's go"}
      </button>
    </div>
  );
}

export default SearchBar;
