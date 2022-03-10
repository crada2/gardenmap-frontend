import React, { useState } from "react";

import "../assets/styles/form.css";

const GardenForm = () => {
  const [title, setTitle] = useState("");
  /*const [description, setDescription] = useState("");
  const [direction, setDirection] = useState("");*/
  const [observations, setObservations] = useState("");
  const [price, setPrice] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newData = { title, observations, price };

    fetch("http://localhost:8000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    }).then(() => {
      console.log(newData);
    });
  };

  return (
    <div className="background">
      <div className="containerFormGarden">
        <div className="title">
          <p>What do you offer:</p>
        </div>
        <div className="content">
          <form className="form" onSubmit={submitHandler}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="title"  >Title</label>
              </div>
              <div className="col-75">
                <input
                  id="title"
                  type="text"
                  placeholder="A title for your services"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            {/*<div className="row">
              <div className="col-25">
                <label htmlFor="description">Description</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="Explain what do you offer"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div> */}
            {/*  <div className="row">
              <div className="col-25">
                <label htmlFor="direction">Direction</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="Where is your garden?"
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                />
              </div> */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="direction">Observations</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="Explain what it is about"
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="price">Observations</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="How much does it cost?"
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="price">Price</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="How much does it cost?"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            {/* <div className="row">
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
            </div>*/}
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GardenForm;
