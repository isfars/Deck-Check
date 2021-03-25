import React from "react";

export const SearchBar = () => {
  return (
    <div class="flex border-grey-light border">
      <input class="w-80 rounded ml-1" type="text" placeholder="Search..." />
      <button class="bg-grey-lightest border-grey border-l shadow hover:bg-grey-lightest">
        <span class="w-full flex justify-end items-center text-grey p-2 hover:text-grey-darkest">
          <i class="material-icons text-xs">search</i>
        </span>
      </button>
    </div>
  );
};
