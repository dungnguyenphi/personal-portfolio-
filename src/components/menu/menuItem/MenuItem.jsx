import React from "react";

export const MenuItems = ({ closeMenu }) => {
  return (
    <ul>
      <li onClick={closeMenu}>
        <a href="#intro">Home</a>
      </li>
      <li onClick={closeMenu}>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li onClick={closeMenu}>
        <a href="#works">Works</a>
      </li>
      <li onClick={closeMenu}>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li onClick={closeMenu}>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};
