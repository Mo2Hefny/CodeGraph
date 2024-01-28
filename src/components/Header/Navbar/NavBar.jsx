import React from "react";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      {/*Header*/}
      <div class="menu" id="menu">
        <a href="#hero" class="menu-item underline square">
          Home
        </a>
        <a href="#topics" class="menu-item underline diamond">
          Algorithms
        </a>
        <a href="#about" class="menu-item underline circle">
          About
        </a>
        <a href="#contact" class="menu-item underline rectangle">
          Contact
        </a>
      </div>
    </>
  );
};
