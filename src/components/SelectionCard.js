import React, { useContext } from "react";
import { Context } from "./Store";

export const SelectionCard = ({ card }) => {
  const [state, dispatch] = useContext(Context);
  return (
    <div className="w-64 border rounded-lg p-3 bg-white mx-4 my-1 shadow-lg">
      <img src={card.image_uris.normal} className="w-full" alt="..." />
      <div className="px-1 bg-white">
        <div className="flex flex-grow items-center pt-1  justify-between">
          <div>
            <button className="slide-button text-blue-600" onClick= {()=>dispatch({type: 'removeFromDeck', payload: card})}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <div className="text-3xl">
            {state.deckContents[card.id] ? state.deckContents[card.id].count : 0}
          </div>
          <div>
            <button className="slide-button" onClick={()=>dispatch({type: 'addToDeck', payload: card})}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
