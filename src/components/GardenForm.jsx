import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/styles/form.css";
import swal from 'sweetalert'; 

const GardenForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [observations, setObservations] = useState("");
  const [price, setPrice] = useState("");

  //POST
  const sendDataAPI = () => {
    axios.post(`http://localhost:8080/products`, {
      title,
      observations,
      price,
    }).then(() => {
      navigate('/garden')
      swal({
        title: "new service added successfully",
        text: "click 'ok' to continue",
        icon: "success",
        }); 
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();

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
                <label htmlFor="title">Title</label>
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
            <button type="submit" onClick={sendDataAPI}>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GardenForm;
