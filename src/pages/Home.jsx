import React from "react";
import "../assets/styles/home.css";


const Home = () => {
  return (
    <div className="containerHome">
      <h2 className="title">titulo main home</h2>
      <article className="boxInfo">
        <section className="sectionHome">
          <div className="homeImg"><img className="homeImg planet"  src={require("../assets/img/planet.png")} title="img tierra" alt="img tierra" /></div>
          <div> 
          <li className="homeLi">1111111111111</li>
            <li className="homeLi">2sssssssssss</li>
            <li className="homeLi">2sssssssssss</li>
          </div>
        </section>

        <section className="sectionHome">
          <div className="homeImg"><img className="homeImg plant"  src={require("../assets/img/plant.png")}/> </div>
          <div> 
            <ul className="homeUl">
              <li className="homeLi">1111111111111</li>
              <li className="homeLi">2sssssssssss</li>
              <li className="homeLi">2sssssssssss</li>
            </ul>
          </div>
          </section>
      </article>

        <div className="google-map-code">
          <iframe className="ifraMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin">
          </iframe>
        </div>
        <button className="btn">Register</button>
 
 

    </div>
  );
};
export default Home;
