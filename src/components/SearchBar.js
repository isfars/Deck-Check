import React from "react";

export const SearchBar = () => {
  return (
    <div className="flex border-grey-light border">
      <input className="w-80 rounded ml-1" type="text" placeholder="Search..." />
      <button className="bg-grey-lightest border-grey border-l shadow hover:bg-grey-lightest">
        <span className="w-full flex justify-end items-center text-grey p-2 hover:text-grey-darkest">
          <i className="material-icons text-xs">search</i>
        </span>
      </button>
    </div>
  );
};
