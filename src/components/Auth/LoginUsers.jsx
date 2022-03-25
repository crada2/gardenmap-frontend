import React from "react";
import "../../assets/styles/login.css";
import { useUser } from "./AuthProvider";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const LoginUsers = () => {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const submit = async (e) => {
    try {
      e.preventDefault();

      const { data } = await api.login({ username, password });

      setUser({
        id: data.id,
        username: data.username,
        email: data.email,
      });

      localStorage.setItem("auth_token", data.accessToken);

      navigate("/garden", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login_container">
      <div className="login_card">
        <h1>Login to GardenMaps</h1>
        <form className="form_login" onSubmit={submit}>
          <div className="form_login-name">
            <label className="label_login" htmlFor="">
              Name:{" "}
            </label>
            <input
              className="input_login"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form_login-password">
            <label className="label_login" htmlFor="">
              Password:{" "}
            </label>
            <input
              className="input_login"
              
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button to="/garden" className="btn_form_login" type="submit">
            Login
          </button>
        </form>
        <img
          className="login_gif"
          src="https://media4.giphy.com/media/iy7h2RteA2Et5fBSYN/200w.webp?cid=ecf05e47chujau85xi8so3qte1nbc4yi9p59ahqpmc86bdrf&rid=200w.webp&ct=s"
          alt=""
        />
      </div>
    </div>
  );
};
export default LoginUsers;
