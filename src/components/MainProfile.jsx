/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import "../assets/styles/mainprofile.css";

const MainProfile = ({ title, observations, price, onDelete }) => {

  return (
    <div>
      <main className="gridProfile">
        <div className="mainprofile-cardmap">
          <article className="articleProfile">
            <div className="map-local">
              <div className="map-profile">
                <iframe
                  className="ifraMaping"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>
          </article>
        </div>
        <article className="articleDescription">
          <div className="map-perfil">
            <ul>
              <p>🌻 {title}</p>
              <ul className="dentro">
                <li>🌱 por dia 40$</li>
                <li>🌱 por mes 150$</li>
              </ul>
              <p>🌻 Visitas guiadas: {price}$/person</p>
              <ul className="dentro">
                <li>🌱 1h visita</li>
                <li>🌱 actividad con niños</li>
                <li>🌱 cesta regalo</li>
              </ul>
              <p>🌻 Observations</p>
              <ul className="dentro">
                <li>🌱 {observations}</li>
                {/*      <li>🌱 mercado ecológico</li>
                <li>🌱 talleres free para todas las edades</li> */}
              </ul>
              {/*<p>🌻 Location</p>
              <ul className="dentro">
                <li>🌱 {location}</li>
              </ul>*/}
            </ul>
          </div>
        </article>
        <div>
        <button
            type="button"
            className="btn-danger"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </main>
      <article className="articleLogin">
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
