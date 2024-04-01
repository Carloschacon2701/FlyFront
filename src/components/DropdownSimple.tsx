import React from "react";
import { FaAngleDown } from "react-icons/fa";

interface Props {
  title: string;
  values?: string[];
}

const DropdownSimple = ({ title, values }: Props) => {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div
        tabIndex={0}
        className="text-darkBlue font-medium flex items-center gap-2"
      >
        {title}
        <FaAngleDown className="text-lightBlue" />
      </div>
      <p className="text-sm font-light">Value</p>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownSimple;
