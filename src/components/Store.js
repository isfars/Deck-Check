import React, { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
        message: action.message,
      };
    case "drawer":
      return {
        ...state,
        drawer: !action.payload,
      };
    case "setPool":
      return {
        ...state,
        pool: action.payload,
      };
    case "setSelectedDeckContents":
      return {
        ...state,
        deckContents: action.payload,
      };
    case "setDeckStats":
      return {
        ...state,
        deckStats: action.payload,
      };
    case "addToDeck":
      console.log(action.payload);
      let newDeck;
      let newDeckStats;
      let change = false;
      if (action.payload) {
        if (!state.deckContents[action.payload.id]) {
          newDeck = { ...state.deckContents };
          newDeck[action.payload.id] = action.payload;
          newDeck[action.payload.id].count = 1;
          change = true;
        } else {
          newDeck = { ...state.deckContents };
          console.log(`old : ${JSON.stringify(newDeck, null, 2)}`);
          if (action.payload.type_line.includes("Basic Land")) {
            newDeck[action.payload.id].count += 1;
            change = true;
            console.log(`new : ${JSON.stringify(newDeck, null, 2)}`);
          } else {
            if (newDeck[action.payload.id].count < 4) {
              newDeck[action.payload.id].count += 1;
              change = true;
              console.log(`new : ${JSON.stringify(newDeck, null, 2)}`);
            }
          }
        }
        if (change) {
          newDeckStats = { ...state.deckStats };
          newDeckStats.cardCount += 1;
          if (action.payload.cmc) {
            let newCmc = action.payload.cmc;
            newDeckStats.spellCount += 1;
            newDeckStats.avgCmc = (
              (newDeckStats.avgCmc * (newDeckStats.spellCount - 1) + newCmc) /
              parseFloat(newDeckStats.spellCount)
            ).toFixed(2);
            newCmc < 7
              ? (newDeckStats.curve[newCmc] += 1)
              : (newDeckStats.curve[7] += 1);
          }
          if (action.payload.type_line.includes("Land")) {
            newDeckStats.landCount += 1;
          }
        } else {
          newDeckStats = state.deckStats;
        }
        console.log(newDeckStats);
      }
      return {
        ...state,
        deckContents: newDeck,
        deckStats: newDeckStats,
      };
    case "removeFromDeck":
      let smallerDeck;
      let smallerDeckStats;
      if (action.payload) {
        if (state.deckContents[action.payload.id]) {
          smallerDeck = { ...state.deckContents };
          if (state.deckContents[action.payload.id].count > 1) {
            smallerDeck[action.payload.id].count -= 1;
          } else {
            delete smallerDeck[action.payload.id];
          }

          smallerDeckStats = { ...state.deckStats };
          smallerDeckStats.cardCount -= 1;
          if (action.payload.cmc) {
            let newCmc = action.payload.cmc;
            smallerDeckStats.spellCount -= 1;
            if(smallerDeckStats.spellCount>0){
              smallerDeckStats.avgCmc = (
                smallerDeckStats.avgCmc * (smallerDeckStats.spellCount + 1) - newCmc) /
                parseFloat(smallerDeckStats.spellCount).toFixed(2);
              newCmc < 7
                ? (smallerDeckStats.curve[newCmc] -= 1)
                : (smallerDeckStats.curve[7] -= 1);
            } else {
              smallerDeckStats.avgCmc = 0.00;
              newCmc < 7
                ? (smallerDeckStats.curve[newCmc] -= 1)
                : (smallerDeckStats.curve[7] -= 1);
            }
          }
          if (action.payload.type_line.includes("Land")) {
            smallerDeckStats.landCount -= 1;
          }
        } else {
          smallerDeckStats = state.deckStats;
          smallerDeck = state.deckContents;
        }
      }
      console.log(smallerDeckStats)
      return {
        ...state,
        deckContents: smallerDeck,
        deckStats: smallerDeckStats,
      };
  }
};

// const StoreContext = createContext();
const initialState = {
  deckStats: {},
  deckContents: {},
  pool: [],
  count: 0,
  message: "",
  drawer: false,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;

// export const StoreProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return <StoreContext.Provider>{children}</StoreContext.Provider>;
// };

// export const useStore = () => useContext(StoreContext);
