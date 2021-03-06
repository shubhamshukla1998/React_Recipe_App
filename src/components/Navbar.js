import React from "react";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
        <Link to="/" className="navbar-brand">
          <img src={logo} id="logo" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto navbarLink">
            <li className="nav-item ">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/recipes" className="nav-link">
                Recipes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
