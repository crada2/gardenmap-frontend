import React from "react";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img
        className="logo"
        src={require("../assets/img/logo.png")}
        alt="logo"
      />
      <p>© Copyright 2022 - CRADA. All rights reserved</p>
    </div>
  );
};
export default Footer;
