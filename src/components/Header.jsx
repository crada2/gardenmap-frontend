import React from "react";
import "../assets/styles/header.css";


const Header = () => {
  return (
    <div className="containerHeader">
      <div className="header"><img className="logo"  src={require("../assets/img/logoName.png")} title="Logo GardenMap" alt="Logo GardenMap" /></div>
      
      <nav className="nav">
       
        <li className="navList" > GardenMali </li>
        <li className="navList" > OurStory </li>
        <li className="navList" > Village </li>
        <li className="navList" > Comunity </li>
        <p className="separator">|</p>
        <li className="navList" >Green Projects</li>

      </nav>

      <span className="headerSpan"><img className="menu" src={require("../assets/img/menu.png")} alt="icon menu" /></span>
    </div>
  );
};
export default Header;
