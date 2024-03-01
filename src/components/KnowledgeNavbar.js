import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"
import { IoClose, IoMenu } from "react-icons/io5";

function KnowledgeNavbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
   
     const closeMenuOnMobile = () => {
       if (window.innerWidth <= 1150) {
         setShowMenu(false);
       }
     };
    return (
      <header className="header">
        <nav className="nav container">
        <Link to="/" className="logo-class">
          <img src={logo} alt="Logo" />
          </Link>
          <div
            className={`nav__menu ${showMenu ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/Knowledgeplatform" className="nav__link" >
                 Discover
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/learn" className="nav__link">
                  Learn
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/about-us"
                  className="nav__link"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
   
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        </nav>
      </header>
    );
   };
export default KnowledgeNavbar