import React from "react";
import "../styles/Nav.scss";

const Nav = (props) => {
  return (
    <div className="navigation-bar">
      <nav className="header">
        <img src="logo.svg" alt="Welcome!" />
      </nav>
    </div>
  )
};

export default Nav;
