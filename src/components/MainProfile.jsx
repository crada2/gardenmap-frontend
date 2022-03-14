/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "../assets/styles/mainprofile.css";

const MainProfile = ({owner}) => {
  return (
    <div>
      <article className="articleLogin">
        <img
          className="logoName"
          src={require("../assets/img/UserGarden.png")}
          title="user img"
          alt="user img"
        />
        <div class="textLogin">
          <p className="dataLogin">Name:{owner.name}</p>  
          <p className="dataLogin">Phone: {owner.telephone}</p>
          <p className="dataLogin">Email: {owner.email}</p>
          <p className="dataLogin">Direction: {owner.direction}</p>
        </div>
      </article>
    </div>
  );
};

export default MainProfile;
