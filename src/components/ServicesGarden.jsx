import React from "react";
import "../assets/styles/servicesGarden.css";

const ServicesGarden = ({ title, observations, price, onDelete }) => {
  return (
    <div className="fakecard">
      <table className="fakeCardTable">
        <ul>
          <h1 className="activitieFake">
            <img
              src="https://cdn-icons.flaticon.com/png/512/1892/premium/1892747.png?token=exp=1648044295~hmac=dc66fab5b5ac787ca10522c1f38da44c"
              alt=""
            />
          </h1>
          <div className="infoServiceFake">
            <p>🚜 {title}</p></div>
            <ul className="dentroFake">
            <li> Join us and pet the ponies</li>
          </ul>
          
          
          <div className="infoServiceFake">
            <p>🚜 Observations: </p>
            </div>
            <p>{observations}</p>

 
          <ul className="dentroFake">
  
            <li> actividad con niños y cesta regalo</li>
          </ul>
          <div className="infoServiceFake"></div>
            <p>🚜 Precio: {price} </p>
            <ul className="dentroFake">
            <li> por dia: 40$</li>
            <li> por mes 150$</li>
          </ul>
          
          <div className="buttonFake">
            <button className="deleteFake" onClick={onDelete}></button>
            <button className="createFake"></button>
          </div>
        </ul>
      </table>
    </div>
  );
};

export default ServicesGarden;
