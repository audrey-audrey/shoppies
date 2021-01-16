import React from "react";
import "../styles/Nav.scss";

const Nav = (props) => {
  return (
    <div class="navigation-bar">
    <nav class="header">
    <img src="movie-icon.png" />
      <div class="logo">
        <span>{props.title}</span>
      </div>
    </nav>
  </div>
  )
};

export default Nav;
