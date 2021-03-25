import React, { useContext, useEffect } from "react";
import { Context } from "./Store";
import firebase from "../database/firebase";
// import { SearchBar } from "./SearchBar";

export const Layout = ({ children }) => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("m21")
      .onSnapshot((snapshot) => {
        const listCards = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        dispatch({ type: "setPool", payload: listCards });
        dispatch({ type: "drawer", payload: !state.drawer });
        dispatch({
          type: "setDeckStats",
          payload: {
            cardCount: 0,
            avgCmc: 0,
            landCount: 0,
            spellCount: 0,
            curve: {
              0: 0,
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
            },
          },
        });

        dispatch({ type: "setSelectedDeckContents", payload: {} });
      });
    return () => unsubscribe();
  }, []);

  return (
    <div className="parent-container">
      {!state.drawer && (
        <aside className="sidebar">
          <div className="logo">
            <span className="logo-text">Deck Check</span>
          </div>
          <div className="deck-list">
            <nav>
              <ul>
                <li className="p-3 border-gray-50">
                  <div className="sm:grid sm:grid-cols-2 justify-center">
                    <p>Card Count</p>
                    <p>{state.deckStats.cardCount}</p>
                  </div>
                </li>
                <li className="p-3 border-gray-50">
                  <div className="sm:grid sm:grid-cols-2 justify-center">
                    <p>Average CMC</p>
                    <p>{state.deckStats.avgCmc}</p>
                  </div>
                </li>
                <li className="p-3 border-gray-50">
                  <div className="sm:grid sm:grid-cols-2 justify-center">
                    <p>Land Count</p>
                    <p>{state.deckStats.landCount}</p>
                  </div>
                </li>
                <li className="p-3 border-gray-50">
                  <div className="sm:grid sm:grid-cols-2 justify-center">
                    <p>Spell Count</p>
                    <p>{state.deckStats.spellCount}</p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      )}
      <main className="main-container">
        <header className="top-header">
          {state.drawer ? (
            <button
              aria-label="Open menu"
              title="Open menu"
              className="slide-button"
              onClick={() =>
                dispatch({ type: "drawer", payload: state.drawer })
              }
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ) : (
            <button
              aria-label="Close menu"
              title="Close menu"
              className="slide-button"
              onClick={() =>
                dispatch({ type: "drawer", payload: state.drawer })
              }
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          <div className="top-header-content">
            {/* <SearchBar /> */}
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};
