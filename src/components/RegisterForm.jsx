import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../assets/styles/register.css";
//import { v4 as uuidv4 } from "uuid";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [direction, setDirection] = useState("");
  const [telephone, setTelephone] = useState("");

  //POST OWNER
  const sendDataAPI = () => {
    axios
      .post(`http://localhost:8080/owners/`, {
        name,
        email,
        password,
        direction,
        telephone,
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
    <>
      <div className="backgroundRegister">
        <div className="containerRegister">
          <div className="contentRegister">
            <h2 className="titleRegister">REGISTER</h2>
            <form className="formRegister" onSubmit={submitHandler}>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="col-75">
                  <input
                    id="name"
                    type="text"
                    placeholder="Choose your username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    placeholder="What is your email?"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="password">Password</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    placeholder="Choose a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="direction">Direction</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    placeholder="What is the garden' address?"
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="telephone">Telephone</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    placeholder="Your telephone number"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" onClick={sendDataAPI}>
                Register
              </button>
            </form>
          </div>
        </div>

        <div className="containerImgRegister">
          <img className="imgRegister" alt="imageRegister"></img>
        </div>
      </div>
    </>
  );
};
export default RegisterForm;
