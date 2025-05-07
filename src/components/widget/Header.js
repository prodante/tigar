import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const devider = " / ";
  return (
    <nav>
        <NavLink to="/">Главная</NavLink> { devider }
        <NavLink to="/about">О сайте</NavLink>
    </nav>
  );
}

export default Header;