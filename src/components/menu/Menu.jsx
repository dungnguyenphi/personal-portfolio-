import React from "react";
import { MenuItems } from "./menuItem/MenuItem";
import "./style.scss";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className={`menu${menuOpen ? " active" : ""}`}>
      <MenuItems closeMenu={closeMenu} />
    </div>
  );
};
