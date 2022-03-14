import React from "react";
import "../assets/styles/servicesGarden.css";

const ServicesGarden = ({ title, observations, price, onDelete }) => {
  return (
    <div class="highlights">
      <section class="card">
        <h3>Servicio </h3>

        <div className="map-perfil">
          <ul>
            <p className="infoService">
              <div>🌻</div> <b>{title}</b>{" "}
            </p>
            <ul className="dentro">
              <li>🌱 por dia: {price}$</li>
              <li>🌱 por mes 150$</li>
            </ul>
            <p className="infoService">
              <div>🌻</div> <b>Visitas guiadas: </b>{" "}
            </p>
            <ul className="dentro">
              <li>🌱 price: 20$/person</li>
              <li>🌱 actividad con niños</li>
              <li>🌱 cesta regalo</li>
            </ul>
            <p className="infoService">
              <div>🌻</div> <b>Observations</b>{" "}
            </p>
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
        <button className="card__btn" onClick={onDelete}>
          Delete
        </button>
        <button class="card__btn-update">update </button>
      </section>
    </div>
  );
};

export default ServicesGarden;
