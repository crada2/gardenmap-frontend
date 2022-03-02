import React from "react";
import Footer from "../components/Footer";
import "../assets/styles/form.css";

export default function Form() {
  return (
    <>
      <div className="container">
        <div className="containter-title">
          <h3>FORMULARY</h3>
        </div>

        <div className="containter-content">
          <fieldset>
            <form className="content">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="What is your name?" />
              <label htmlFor="surname">Surame</label>
              <input type="text" placeholder="And your last name?" />
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Address of your garden" />
              <label htmlFor="services">Offers</label>
              <input type="text" placeholder="What do you want to offer?" />
              <input type="submit" value="Submit" />
            </form>
          </fieldset>
        </div>
      </div>
      <Footer />
    </>
  );
}
