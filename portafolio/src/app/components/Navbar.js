import React from "react";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const listas = [
    "Home",
    "About Me",
    "Skills",
    "Portfolio",
    "Services",
    "Contact",
  ];
  return (
    <header className="header">
      <nav className="navbar">
        <h2 className="title">F</h2>
        <ul className="menu">
          {listas.map((enlance,index) => {
            return (
              <li key={index}>
                <a href="#">{enlance}</a>
              </li>
            );
          })}
        </ul>
        <a className="icon" href="#">
          <CiMenuFries />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
