import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          IT-Log
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#!">Sass</a>
          </li>
          <li>
            <a href="#!">Components</a>
          </li>
          <li>
            <a href="#!">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
