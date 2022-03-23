import React from "react";
import "../assets/styles/login.css";



const LoginUsers = () => {
    return (
 
       <div className="login_container">

          <div className="login_card">
          <h1>Login to GardenMaps</h1>

          <form className="form_login" action="" method="post">
             <div className="form_login-name">
               <label className="label_login" htmlFor="">Name: </label>
               <input className="input_login" type="text" />
             </div>
            
           <div className="form_login-password">
               <label className="label_login" htmlFor="">Password: </label>
               <input className="input_login" type="text" />
           </div>
           <button className="btn_form_login" type="submit">
              Singin
            </button>
            </form>
             
         
          <img className="login_gif" src="https://media4.giphy.com/media/iy7h2RteA2Et5fBSYN/200w.webp?cid=ecf05e47chujau85xi8so3qte1nbc4yi9p59ahqpmc86bdrf&rid=200w.webp&ct=s" alt="" />
            
          </div>
                

        

       </div>
    );
  };
  export default LoginUsers;
  