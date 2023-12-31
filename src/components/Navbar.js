import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <span className="navbar-brand" onClick={toggleNav}>
        showmethenews
      </span>
      <div className="navgrid">
        <NavLink className="nav-item" to="/" onClick={toggleNav}>
          General
        </NavLink>
        <NavLink className="nav-item" to="/science" onClick={toggleNav}>
          Science
        </NavLink>
        <NavLink className="nav-item" to="/business" onClick={toggleNav}>
          Business
        </NavLink>
        <NavLink className="nav-item" to="/technology" onClick={toggleNav}>
          Technology
        </NavLink>
        <NavLink className="nav-item" to="/health" onClick={toggleNav}>
          Health
        </NavLink>
        <NavLink className="nav-item" to="/sports" onClick={toggleNav}>
          Sports
        </NavLink>
        <NavLink className="nav-item" to="/entertainment" onClick={toggleNav}>
          Entertainment
        </NavLink>
      </div>

      <div className="dropdown">
        <button onClick={() => setIsOpen(!isOpen)}>Choose category↓</button>
        {isOpen && (
          <div className="menu">
            <NavLink className="nav-item" to="/" onClick={toggleNav}>
              General
            </NavLink>
            <NavLink className="nav-item" to="/science" onClick={toggleNav}>
              Science
            </NavLink>
            <NavLink className="nav-item" to="/business" onClick={toggleNav}>
              Business
            </NavLink>
            <NavLink className="nav-item" to="/technology" onClick={toggleNav}>
              Technology
            </NavLink>
            <NavLink className="nav-item" to="/health" onClick={toggleNav}>
              Health
            </NavLink>
            <NavLink className="nav-item" to="/sports" onClick={toggleNav}>
              Sports
            </NavLink>
            <NavLink
              className="nav-item"
              to="/entertainment"
              onClick={toggleNav}
            >
              Entertainment
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
