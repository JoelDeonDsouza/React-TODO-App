import React from "react";

const Header = ({ handleMode }) => {
  return (
    <div className="header">
      <h1>Sticky Note Keeper</h1>
      <button
        onClick={() => handleMode((preDarkMode) => !preDarkMode)}
        className="btn"
      >
        Mode
      </button>
    </div>
  );
};

export default Header;
