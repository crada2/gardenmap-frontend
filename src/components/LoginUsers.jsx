
import "../assets/styles/login.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginUsers = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

const sendDataLogin = () => {
  axios
  .post(`http://localhost:8080/auth/signin`, {
    username,
    password,
  })
  .then(() => {
    console.log(sendDataLogin)
    navigate("/register");
  });
}; 
const submitHandler = (event) => {
  event.preventDefault();
}; 
  
  
  return (
 
       <div className="login_container">

          <div className="login_card">
          <h1>Login to GardenMaps</h1>

          <form className="form_login" onSubmit={submitHandler} method="post">
             <div className="form_login-name">
               <label className="label_login" htmlFor="name">Name: </label>
               <input className="input_login" type="text"  placeholder=" Your name is..."  value={username}
              onChange={(e) => setUserName(e.target.value)} />
             </div>
            
           <div className="form_login-password">
               <label className="label_login" htmlFor="password" >Password: </label>
               <input className="input_login" type="password" placeholder=" Your password is..."  value={password}
              onChange={(e) => setPassword(e.target.value)} />
           </div>
           <button   type="submit"
              onClick={sendDataLogin} className="btn_form_login">
              Singin
            </button>
            </form>
             
         
          <img className="login_gif" src="https://media4.giphy.com/media/iy7h2RteA2Et5fBSYN/200w.webp?cid=ecf05e47chujau85xi8so3qte1nbc4yi9p59ahqpmc86bdrf&rid=200w.webp&ct=s" alt="" />
            
          </div>
                

        

       </div>
    );
  };

  export default LoginUsers;
  