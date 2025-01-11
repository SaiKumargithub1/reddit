import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faFireAlt,
  faCircle,
  faEnvelope,
  faComments,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <FontAwesomeIcon icon={faSun} className="sun-icon" />
        <img src="/src/images/logo.png" alt="Reddit Logo" className="logo" />
      </div>

      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <FontAwesomeIcon icon={faHome} className="nav-icon" /> Home
          </li>
          <li>
            <FontAwesomeIcon icon={faFireAlt} className="nav-icon" /> Popular
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className="nav-icon" /> All
          </li>
        </ul>
      </div>

      <div className="search-create-container">
        <input
          type="text"
          placeholder="Find community or post"
          className="search-input"
        />

        <button className="create-post-btn">Create Post</button>
      </div>

      <div className="icons-container">
        <FontAwesomeIcon icon={faComments} className="icon" />
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <FontAwesomeIcon icon={faUserCircle} className="icon" />
      </div>
    </header>
  );
}

export default Header;
