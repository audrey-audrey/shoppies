import React from "react";
import "../styles/Nav.scss";

const Nav = (props) => {
  return (
    <div className="navigation-bar">
    <nav className="header">
    <img src="movie-icon.png" alt="Welcome!"/>
      <div className="logo">
        <span>{props.title}</span>
      </div>
    </nav>
  </div>
  )
};

export default Nav;
