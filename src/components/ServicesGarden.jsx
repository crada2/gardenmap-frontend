import React from "react";
import "../assets/styles/servicesGarden.css";

const ServicesGarden = ({ title, observations, price, onDelete }) => {
  return (
    <div className="highlights">
      <section className="card">
        <button className="card__btn_initial"><img src="" alt="" /></button>

        <div className="map-perfil">
          <ul>
            <div className="infoService">
              <p>{title}</p>{" "}
            </div>
            <ul className="dentro">
              <li> por dia: {price}$</li>
              <li> por mes 150$</li>
            </ul>
            <div className="infoService">
              <img src="" alt="" /><p>Visitas guiadas: </p>{" "}
            </div>
            <ul className="dentro">
              <li> price: 20$/person</li>
              <li> actividad con niños</li>
              <li> cesta regalo</li>
            </ul>
            <div className="infoService">
              <p>Observations</p>{" "}
            </div>
            <ul className="dentro">
              <li> {observations}</li>
            </ul>
          </ul>
        </div>
        <button className="card__btn" onClick={onDelete}>
          Delete
        </button>
        <button className="card__btn-update">update </button>
      </section>
    </div>
  );
};

export default ServicesGarden;
