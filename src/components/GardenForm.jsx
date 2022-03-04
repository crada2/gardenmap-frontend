import React from "react";

const GardenForm = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="container-title">
          <p>Tell us about you</p>
        </div>
        <div className="container-content">
          <form className="content">
            <div className="row">
              <div className="col-25">
                <label htmlFor="name">Name</label>
              </div>
              <div className="col-75">
                <input type="text" placeholder="What is your name?" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="surname">Surname</label>
              </div>
              <div className="col-75">
                <input type="text" placeholder="And your last name?" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="location">Location</label>
              </div>
              <div className="col-75">
                <input type="text" placeholder="Where is your garden?" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col-75">
                <input type="text" placeholder="What is your e-mail??" />
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
