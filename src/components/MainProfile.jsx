/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import "../assets/styles/mainprofile.css";

const MainProfile = () => {

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
          <p className="dataLogin">Name:Fulano</p>
          <p className="dataLogin">Last Name: Mengano Bartol</p>
          <p className="dataLogin">Phone: 666666666</p>
          <p className="dataLogin">Email: 66666@garden.com</p>
          <p className="dataLogin">Profile: 987123986129731</p>
        </div>
        
         
      </article>
    </div>
  )};


export default MainProfile;
