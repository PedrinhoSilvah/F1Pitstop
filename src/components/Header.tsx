import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import LogoF1 from "../assets/imgs/LogoF1-removebg-preview.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img className="LogoF1" src={LogoF1} alt="Logo_F1" />
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>

        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <Link className="Url" to="/">
            Home
          </Link>
          <Link className="Url" to="/Drivers">
            Pilotos
          </Link>
          <Link className="Url" to="/Team">
            Equipes
          </Link>
          <Link className="Url" to="/Circuits">
            Circuitos
          </Link>
        </ul>
      </nav>
      <nav className="navbar1">
        <img className="LogoF1" src={LogoF1} alt="Logo_F1" />
        <ul>
          <Link className="Url" to="/">
            Home
          </Link>
          <Link className="Url" to="/Drivers">
            Pilotos
          </Link>
          <Link className="Url" to="/Team">
            Equipes
          </Link>
          <Link className="Url" to="/Circuits">
            Circuitos
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
