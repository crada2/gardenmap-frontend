/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../../assets/styles/register.css";

console.log(api);

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      await api.signup({
        name,
        email,
        password,
      });

      const { data } = await api.login({ username: name, password });

      localStorage.setItem("auth_token", data.accessToken);

      navigate("/form", { replace: true });
      swal({
        title: "Register complete",
        text: "click 'ok' to add your offers",
        icon: "success",
      });
    } catch (error) {
      console.log(error.message);
      // Sweet alert de error
    }
  };

  /*
  alert(res.data.msg);
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
          <form className="form_register_information" onSubmit={submit}>
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
              required
            />
            <label className="form_label_register" htmlFor="email">
              🍀 Email
            </label>
            <input
              className="inputRegisterForm"
              type="email"
              placeholder="What is your email?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="form_label_register" htmlFor="password">
              🍀 Password
            </label>
            <input
              className="inputRegisterForm"
              type="password"
              placeholder="Choose a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn_form_register" type="submit">
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
