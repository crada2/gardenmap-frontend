import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/styles/form.css";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

const GardenForm = () => {
  const navigate = useNavigate();
  const [direction, setDirection] = useState("");
  const [telephone, setTelephone] = useState("");
  const [title, setTitle] = useState("");
  const [observations, setObservations] = useState("");
  const [price, setPrice] = useState("");

  //POSTT
  const sendDataAPI = () => {
    axios
      .post(`http://localhost:8080/products`, {
        direction,
        telephone,
        title,
        observations,
        price,
      })
      .then(() => {
        navigate("/garden");
        swal({
          title: "new service added successfully",
          text: "click 'ok' to continue",
          icon: "success",
        });
      });
  };

  /*const submitHandler = (event) => {
    event.preventDefault();

  };*/

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
    sendDataAPI();
  }; // your form submit function which will invoke after successful validation

  return (
    <div className="form_main">
      <div className="form_container">
        <div className="form_hero">
          <p className="gf-titleform">What do you offer</p>
        </div>

        <div className="form_container_info">
          <form className="form_info" onSubmit={handleSubmit(onSubmit)}>
            {/* title */}

            <label className="gf-form-label" htmlFor="f-title">
              🍀 Title
            </label>

            <input
              {...register("titleForm", { required: true, maxLength: 30 })}
              className="gf-inputext"
              type="gf-text"
              placeholder="A title for your service"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {errors.titleForm && (
              <p className="error-text">Please, a title is required</p>
            )}

            {/* Observations */}

            <label className="gf-form-label" htmlFor="f-observations">
              {" "}
              🍀 Observations
            </label>

            <input
              {...register("observationsForm", {
                required: true,
                validate: (value) => value.length > 10,
              })}
              className="gf-inputext"
              type="text"
              placeholder="Briefly describe what do your offer"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
            />

            {errors.observationsForm && (
              <p className="error-text">
                Sorry, your observations are too short.
              </p>
            )}

            <label className="gf-form-label" htmlFor="f-price">
              🍀 Price
            </label>

            <input
              {...register("priceForm", {
                required: true,
                validate: {
                  positiveNumber: (value) => parseInt(value) > 0,
                },
              })}
              autoComplete="off"
              className="gf-inputext"
              type="text"
              placeholder="How much does it cost?"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            {errors.priceForm && errors.priceForm.type === "positiveNumber" && (
              <p className="error-text">The Price is invalid</p>
            )}
            {errors.priceForm && (
              <p className="error-text">The price is required.</p>
            )}

            <button className="gf-btn_form" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GardenForm;
