/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import axios from "axios";
import serviceApi from "../../services/serviceApi";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../../assets/styles/register.css";

const initialSingup = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const [register, setRegister] = useState(initialSingup);
  const navigate = useNavigate();

  const api = serviceApi();

  const submitHandler = (event) => {
    event.preventDefault();
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };

  const sendDataAPI = (e) => {
    e.preventDefault();
    const data = {
      name: register.name,
      email: register.email,
      password: register.password,
    };

    axios.get("/sanctum/csrf-cookie").then((res) => {
      api
        .signin(data)
        .then((res) => {
          setRegister({ ...register, data });
        })
        .then(() => {
          navigate("/form", { replace: true });
          swal({
            title: "Register complete",
            text: "click 'ok' to add your offers",
            icon: "success",
          });
        }); /* .catch(error => {
          setRegister({...register, error_list: error.response.data.msg})
      });*/
    }, []);
  };
  /*alert(res.data.msg);
          navigate('/crud-api-login', { replace: true });const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [direction, setDirection] = useState("");
  const [telephone, setTelephone] = useState("");*/

  //POST OWNER
  /*const sendDataAPI = () => {
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
*/

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
              value={register.name}
            />
            <label className="form_label_register" htmlFor="email">
              🍀 Email
            </label>
            <input
              className="inputRegisterForm"
              type="text"
              placeholder="What is your email?"
              value={register.email}
            />
            <label className="form_label_register" htmlFor="password">
              🍀 Password
            </label>
            <input
              className="inputRegisterForm"
              type="text"
              placeholder="Choose a password"
              value={register.password}
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
