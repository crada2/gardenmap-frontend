import React from "react";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img className="logo" src={require("./assets/img/logo.png")} alt="logo" />
      <p>Copyright reserved to CRADA</p>
    </div>
  );
};
export default Footer;
