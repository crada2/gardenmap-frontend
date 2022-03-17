import React from "react";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="containerHeader">
      <Link to="/">
        <div className="boxHeader">
          <img
            className="logoHeader"
            src={require("../assets/img/logoName.png")}
            title="Logo GardenMap"
            alt="Logo GardenMap"
          />
        </div>
      </Link>
      <nav className="boxNav">
        <li className="navList"> GardenMali </li>
        <li className="navList"> OurStory </li>
        <li className="navList"> Village </li>
        <li className="navList"> Comunity </li>
        <p className="separator">|</p>
        <li className="navList">Green Projects</li>
      </nav>
      <span className="headerSpan">
        <img
          className="menu"
          src={require("../assets/img/menu.png")}
          alt="icon menu"
        />
      </span>
    </div>
  );
};
export default Header;
