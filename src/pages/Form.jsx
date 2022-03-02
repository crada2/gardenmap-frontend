import React from "react";
import Footer from "../components/Footer";
import "../assets/styles/form.css";

export default function Form() {
  return (
    <div className="container">
      <fieldset>
        <div className="title">
          <legend>FORMULARY</legend>
        </div>

        <form className="content">
          <div className="row">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="What is your name?" />
          </div>
          <div className="row">
            <label htmlFor="surname">Surname</label>
            <input type="text" placeholder="And your last name?" />
          </div>
          <div className="row">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Address of your garden" />
          </div>
          <div className="row">
            <label htmlFor="services">Offers</label>
            <input type="text" placeholder="What do you want to offer?" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </fieldset>
    </div>
  );
}
