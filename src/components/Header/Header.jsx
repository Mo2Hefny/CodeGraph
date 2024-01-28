import React from "react";
import "./Header.css";
import { NavBarS } from "./Navbar/NavBarS";
import { NavBar } from "./Navbar/NavBar";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <>
      <nav class="header">
        <Logo to="#hero" />
        <NavBar />
        <div class="hamburger-menu" id="hamburger-menu">
          <div class="hamburger-icon" id="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <NavBarS />
    </>
  );
};
