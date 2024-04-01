import DropdownSimple from "@/components/DropdownSimple";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchDestiny = () => {
  return (
    <div className="w-[530px] absolute h-[70px] rounded-lg bottom-16 shadow-md flex justify-between px-4 items-center bg-white">
      <DropdownSimple title="Location" />
      <DropdownSimple title="Date" />
      <DropdownSimple title="Price" />
      <button className="btn text-white border-none bg-lightBlue shadow-md ">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchDestiny;
