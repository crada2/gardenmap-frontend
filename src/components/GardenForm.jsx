import React from "react";
import "../assets/styles/form.css";
const GardenForm = () => {
  return (
    <div className="background">
      <div className="containerFormGarden">
        <div className="title">
          <p>Tell us about you</p>
        </div>
        <div className="content">
          <form className="form">
            <div className="row">
              <div className="col-25">
                <label htmlFor="title">Title</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="Write a title for your garden"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="description">Description</label>
              </div>
              <div className="col-75">
                <input type="text" placeholder="Explain what do you offer" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="direction">Direction</label>
              </div>
              <div className="col-75">
                <input type="text" placeholder="Where is your garden?" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="price">Price</label>
              </div>
              <div className="col-75">
                <input type="text" placeholder="How much does it cost?" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="services">Services</label>
              </div>
              <div className="col-75">
                <select id="services" name="services">
                  <option value="Rent">Rent my garden</option>
                  <option value="Visit">Organize visits</option>
                  <option value="Produce">Sell my produce</option>
                </select>
              </div>
            </div>
          </form>
          <button>Join the garden family!</button>
        </div>
      </div>
    </div>
  );
};

export default GardenForm;
