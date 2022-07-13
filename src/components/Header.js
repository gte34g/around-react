import React from "react";
import logo from "../images/Header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Around the U.S." className="header__logo" />
    </header>
  );
}

export default Header;
