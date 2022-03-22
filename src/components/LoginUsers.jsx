import React from "react";
import "../assets/styles/login.css";



const LoginUsers = () => {
    return (
 
       <div className="login_container">

          <div className="login_card">
          <h1>Login to GardenMaps</h1>

          <form action="" method="post">
             <label htmlFor="">Name: <input type="text" /></label>
            </form>
            <form action="" method="post">
             <label htmlFor="">Password: <input type="text" /></label>
            </form>
             
         
          <img src="https://media4.giphy.com/media/iy7h2RteA2Et5fBSYN/200w.webp?cid=ecf05e47chujau85xi8so3qte1nbc4yi9p59ahqpmc86bdrf&rid=200w.webp&ct=s" alt="" />
            
          </div>
                

        

       </div>
    );
  };
  export default LoginUsers;
  