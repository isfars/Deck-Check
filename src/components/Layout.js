import React from "react";

export const Layout = ({ children, isClosed, setClosed, isStatic }) => {
  // const [isClosed, setClosed] = useState(false);
  // const isStatic = useBreakPoint('sm');

  return (
    <div className="parent-container">
      {(isStatic || !isClosed) && (
        <aside className="sidebar">
          <div className="logo">
            <span className="logo-text">Application</span>
          </div>
          <div className="deck-list">
            <nav>
              <ul>
                <li className="p-3">
                  <a href="">current deck</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      )}
      <main className="main-container">
        <header className="top-header">
          {!isStatic &&
            (isClosed ? (
              <button
                tabIndex="1"
                aria-label="Open menu"
                title="Open menu"
                className="slide-button"
                onClick={() => setClosed(false)}
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
                tabIndex="1"
                aria-label="Close menu"
                title="Close menu"
                className="slide-button"
                onClick={() => setClosed(true)}
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
            ))}
          <div className="top-header-content">
            <h1>Deck Check</h1>
            <button className="site-link">isfar</button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};
