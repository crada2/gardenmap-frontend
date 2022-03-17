/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../assets/styles/mainHome.css";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <div>
      <div className="containerHome">
        <div className="containerSvg">
          <h2 className="titleHome"> How to be part of the garden family?</h2>
          <article className="boxInfo">
            <section className="sectionHome">
              <Link to="./garden">
                <div className="homeImg">
                  <img
                    className="homeImg planet"
                    src={require("../assets/img/planet.png")}
                    title="img tierra"
                    alt="img tierra"
                  />
                </div>
              </Link>
              <div className="boxList">
                <ul>
                  <li className="homeLi">mercado ecológico</li>
                  <li className="homeLi">talleres para todas las edades</li>
                  <li className="homeLi">acompañamiento y ayuda</li>
                </ul>
              </div>
            </section>

            <section className="sectionHome">
              <Link to="./form">
                <div className="homeImg">
                  <img
                    className="homeImg plant"
                    src={require("../assets/img/plant.png")}
                  />{" "}
                </div>
              </Link>
              <div className="boxList">
                <ul>
                  <li className="homeLi">mercado ecológico</li>
                  <li className="homeLi">talleres para todas las edades</li>
                  <li className="homeLi">acompañamiento y ayuda</li>
                </ul>
              </div>
            </section>
          </article>
          <div className="sectionMap">
            <div className="google-map-code">
              <iframe
                className="ifraMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
              ></iframe>
              <div className="boxBtn">
                {" "}
                <Link to="/login">
                  <button className="btnMain">Register</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHome;
