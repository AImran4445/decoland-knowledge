import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
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
             <NavLink to="/" className="nav__link"  onClick={closeMenuOnMobile}>
               Our mission
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/news" className="nav__link"  onClick={closeMenuOnMobile}>
               What we do
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/about-us"
               className="nav__link"
             >
               Partners
             </NavLink>
           </li>
           <li className="nav__item">
           <Link to="/knowledgeplatform" className="nav__link">
            Knowledge Platform
            </Link>
           </li>
           <li className="nav__item">
             <NavLink
               to="/about"
               className="nav__link"
                onClick={closeMenuOnMobile}
             >
               About us
             </NavLink>
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

export default Navbar;