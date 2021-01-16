import React from "react";
import "../styles/Nav.scss";

const Nav = (props) => {
  return (
    <div class="navigation-bar">
    <nav>
      <div class="logo">
        <span>{props.title}</span>
      </div>
    </nav>
    {/* <nav>
      <button class="compose">
        <span><b>Write</b> a new tweet</span>
        <div class="arrow bounce">
          <a class="fas fa-angle-double-down" href="#"></a>
        </div>
      </button>
    </nav> */}
  </div>
  )
};

export default Nav;
