import React from "react";
import { SelectionCard } from "./SelectionCard";

export const Body = () => {
  return (
    <div className="grid-rows-2 content-center h-screen">
      <div className="h-2/3 bg-red-200 overflow-y-auto">
        <div className="flex justify-center">
          <div className="bg-black text-white w-1/2 h-32 fixed">Hey</div>
        </div>
        <div className="container mx-auto px-4 mt-24">
          <div className="flex flex-wrap -mx-4">
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
          </div>
        </div>
      </div>
      <div className="h-1/3 bg-blue-200 resize-y">Deck Here </div>
    </div>
  );
};
