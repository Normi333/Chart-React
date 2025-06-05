import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-title">
          Mock-Mun
        </NavLink>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/map"
              className="nav-link"
              activeclassname="active-link"
            >
              Map
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/report"
              className="nav-link"
              activeclassname="active-link"
            >
              Report
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
