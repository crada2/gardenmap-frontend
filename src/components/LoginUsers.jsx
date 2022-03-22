import React from "react";
import "../assets/styles/login.css";



const LoginUsers = () => {
    return (
 
       <div className="login_main">


          <article className="boxInfo">
          <section className='card-group card-profile'>
            <div className='card-container'>
              <div className='card-bg-img bg1'></div>
              <div className='card-profile-img'>
                <img className="img-mainprofile" src={require("../assets/img/logo.png")}/>
            </div>
            <div class='card-heading'>
              <p className="homeLi">
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus et, perspiciatis nisi tempore aspernatur accusantium".</p>
              <p className="mh-homeLi"> GardenMaps</p>
              

        </div>
          </div>
          </section>    
        <section className="mh-review" >
          <div className="mh-box-container">

        <div className="mh-box login_container">
        <i className="fas fa-quote-right"></i>
        <div className="user-commets">
            
   
            <div className="stars">

            <form action="">
            <label htmlFor="">Name:</label>
                <input type="text"  />
                <label htmlFor="">Mail:</label>
                <input type="text"  />
                <label htmlFor="">Password:</label>
                <input type="text"  />
            </form>
             
            </div>
            <div className="mh-comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus et, perspiciatis nisi tempore aspernatur accusantium,
                commodi eum?
            </div>
        </div>
      </div>
            </div>

          </section>


          <section className='card-group card-profile'>
            <div className='card-container'>
              <div className='card-bg-img bg2'></div>
              <div className='card-profile-img'>
                <img className="img-mainprofile" src={require("../assets/img/logo.png")}/>
            </div>
            <div class='card-heading'>
              <p className="homeLi">
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus et, perspiciatis nisi tempore aspernatur accusantium".</p>
              <p className="mh-homeLi"> GardenMaps</p>
             
        </div>
          </div>
          </section>
          </article>
        </div>
    );
  };
  export default LoginUsers;
  