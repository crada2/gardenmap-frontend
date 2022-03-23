/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "../assets/styles/mainprofile.css";

const MainProfile = ({ owner }) => {
  return (
    <div>
      <article className="garden_profile">
        <div className="garden_profile_box">
          <img
            src="https://media0.giphy.com/media/eXpd9abiGUSI11E44i/200w.webp?cid=ecf05e47fr5leyjjflmfp12g3mbdgeaqcjyfrkcrwbfzhmm5&rid=200w.webp&ct=g"
            alt=""
          />
          <p className="garden_profile-info">Pedro{owner.name}</p>
          <p className="garden_profile-info"> 666666666 {owner.telephone}</p>
          <p className="garden_profile-info"> pedro@pedro.com{owner.email}</p>
          <p className="garden_profile-info">
            calle pamplona 6, casa{owner.direction}
          </p>
          <button className="garden_create-service"> Greate my service</button>
        </div>
        <div className="garden_map_box">
          <iframe
            className="garden_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(GardenMaps)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </article>
    </div>
  );
};

export default MainProfile;
