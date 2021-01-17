import React from "react";
import "../styles/Nav.scss";

const Nav = (props) => {
  return (
    <div className="navigation-bar">
    <nav className="header">
    <img src="movie-icon.png" alt="Welcome!"/>
      <h1 className="logo">
        {props.title}
      </h1>
    </nav>
  </div>
  )
};

export default Nav;
