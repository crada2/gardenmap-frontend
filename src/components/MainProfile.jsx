/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useUser } from "./Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import "../assets/styles/mainProfile.css";

const MainProfile = () => {
  const { user } = useUser();




  return (
    <div className="profile-hero">
      <div className="garden-profile-card">
        <h1> My Profile </h1>
        <div className="img-container">
          <img
            src="https://media0.giphy.com/media/eXpd9abiGUSI11E44i/200w.webp?cid=ecf05e47fr5leyjjflmfp12g3mbdgeaqcjyfrkcrwbfzhmm5&rid=200w.webp&ct=g"
            alt=""
          />
        </div>
        <div className="profile-card-info">
          <p>{user?.username}</p>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className="map-box">
        <iframe
          className="map-iframe"
          src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(GardenMaps)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
      </div>
    </div>
  );
};

export default MainProfile;
