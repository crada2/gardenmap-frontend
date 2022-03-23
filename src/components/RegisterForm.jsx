/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../assets/styles/register.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //POST OWNER
  const sendDataAPI = () => {
    axios
      .post(`http://localhost:8080/owners/`, {
        name,
        email,
        password,
        //id: uuidv4(),
      })
      .then(() => {
        navigate("/form");
        swal({
          title: "Register complete",
          text: "click 'ok' to add your offers",
          icon: "success",
        });
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form_main_register">
      <div className="form_container_register">
        <div className="title_register">
          <p className="rf-titleform">REGISTER</p>
        </div>
        <div className="form_register_info">
          <form className="form_register_information" onSubmit={submitHandler}>
            <label className="form_label_register" htmlFor="name">
              🍀 Name
            </label>
            <input
              className="inputRegisterForm"
              id="name"
              type="text"
              placeholder="Choose your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="form_label_register" htmlFor="email">
              🍀 Email
            </label>
            <input
              className="inputRegisterForm"
              type="text"
              placeholder="What is your email?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form_label_register" htmlFor="password">
              🍀 Password
            </label>
            <input
              className="inputRegisterForm"
              type="text"
              placeholder="Choose a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn_form_register"
              type="submit"
              onClick={sendDataAPI}
            >
              Register
            </button>
            <p className="rf-link">
              <Link to="/login" className="rf-link-a" href="#">
                ¿Are you already registered?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
