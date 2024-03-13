import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { IoClose, IoMenu } from "react-icons/io5";
import './KnowledgeNavbar.css';

function KnowledgeNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="logo-class">
          <img src={logo} alt="Logo" />
        </Link>
        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/knowledgeplatform" className="nav__link">
                Discover 
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/learn" className="nav__link">
                Learn
              </Link>
            </li>
            <li className="nav__item">
              <span className="nav__link" onClick={toggleDropdown}>
                Resources ⌵
              </span>
              {showDropdown && (
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <Link to="/resources" className="dropdown-link">
                      Decoland Resources
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
}

export default KnowledgeNavbar;
