import React from "react";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
     
        <div className="h-logo">
        <Link to="/">
          <img
            className="h-logo_img"
            src={require("../assets/img/logoName.png")}
            title="Logo GardenMap"
            alt="Logo GardenMap"
          />
           </Link>
        </div>
     
      <nav className="h-nav">
        <li className="h-nav_list"> GardenMali </li>
        <li className="h-nav_list"> OurStory </li>
        <li className="h-nav_list"> Village </li>
        <li className="h-nav_list"> Comunity </li>
        <p className="h-nav_separator">|</p>
        <li className="h-nav_list">Green Projects</li>
      </nav>
      <span className="h-span">
        <img
          className="h-menu"
          src={require("../assets/img/menu.png")}
          alt="icon menu"
        />
      </span>
    </div>
  );
};
export default Header;
