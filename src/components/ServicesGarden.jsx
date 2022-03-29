import React from "react";
import "../assets/styles/servicesGarden.css";
import { Link } from "react-router-dom";


const ServicesGarden = ({ title, observations, price, onDelete }) => {
  return (
    <div className="card-service">
      <h2 className="card-service_title">{title}</h2>
      <section className="card-service_info">
  
        <article card-service_info> 
         <h4>Service:</h4>  {observations} <br />
         <br />
         <h4>Price Service:</h4> {price} $  

        </article>
        <div className="card-service_btn" >
         
              <Link onClick={onDelete} className="btn-service_delete" to="/garden">
                   <img src="https://media1.giphy.com/media/TxfZ3ARFjpWgELUMCI/giphy.gif?cid=ecf05e47fq0f0d1jkx1hnvyrj7nbtt55f0jzxfakyg08wdj7&rid=giphy.gif&ct=g" alt="" />
              </Link>
          
        </div>
      </section>
      
    </div>
  );
};

export default ServicesGarden;
