import React, { useContext } from "react";
import { SelectionCard } from "./SelectionCard";
import { DeckCard } from "./DeckCard";
import { Context } from "./Store";

export const Body = ({ children }) => {
  const [state] = useContext(Context);
  return (
    <div className="grid-rows-2 content-center h-screen">
      <div className="h-1/2 bg-gray-200 overflow-y-auto">
        <div className="container mx-auto px-4 my-2">
          <div className={state.drawer ? "flex flex-wrap mx-10" : "flex flex-wrap -mx-6" }>
            {state.pool.map((card) => (
              <SelectionCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-1/2 bg-gray-300 overflow-y-auto">
      <div className="container mx-auto px-4 my-2">
        <div className={state.drawer ? "flex flex-wrap mx-8" : "flex flex-wrap -mx-6" }>
          {Object.keys(state.deckContents).map((card) => (
             <DeckCard card={state.deckContents[card]} key={card}/>
            
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};
