/* eslint-disable jsx-a11y/anchor-is-valid */
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
          <h1 className="titleHome">Future is here, Organic Farming</h1>
          <div className="showcase-area">
            <div className="container-main">
              <div className="left">
                <div className="big-title">
                  <h1 className>How to be part of the garden family?</h1>
                </div>
                <p className="text">
                  Organic Agriculture considers medium-and long-term effect of
                  agricultural interventions on the agro-ecosystem!
                </p>
                <div className="cta">
                  <Link to="/register">
                    <a className="btn-cta-m" href="#">
                      Register
                    </a>
                  </Link>
                </div>
              </div>
              <div className="right-m">
                <img
                  className="farms"
                  src={require("../assets/img/farms.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <h2 className="mh-subtitle">What People Say About</h2>
          <h2 className="mh-subtitle2">Garden Maps</h2>
          <article className="boxInfo">
            <section className="card-group card-profile">
              <div className="card-container">
                <div className="card-bg-img bg1"></div>
                <div className="card-profile-img">
                  <img
                    className="img-mainprofile"
                    src={require("../assets/img/logo.png")}
                  />
                </div>
                <div className="card-heading">
                  <p className="homeLi">
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus et, perspiciatis nisi tempore aspernatur
                    accusantium".
                  </p>
                  <p className="mh-homeLi"> Anya Taylor-Joy</p>
                  <div className="stars-homeLi">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </section>
            <section className="mh-review">
              <div className="mh-box-container">
                <div className="mh-box">
                  <i className="fas fa-quote-right"></i>
                  <div className="user-commets">
                    <img
                      className="mh-img"
                      src={require("../assets/img/logo.png")}
                      alt=""
                    />
                    <h3 className="mh-coment-name">John Macintosh</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="mh-comment">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Possimus et, perspiciatis nisi tempore aspernatur
                      accusantium, commodi eum?
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="card-group card-profile">
              <div className="card-container">
                <div className="card-bg-img bg2"></div>
                <div className="card-profile-img">
                  <img
                    className="img-mainprofile"
                    src={require("../assets/img/logo.png")}
                  />
                </div>
                <div className="card-heading">
                  <p className="homeLi">
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus et, perspiciatis nisi tempore aspernatur
                    accusantium".
                  </p>
                  <p className="mh-homeLi"> Audrey Smith</p>
                  <div className="stars-homeLi">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};
export default MainHome;
