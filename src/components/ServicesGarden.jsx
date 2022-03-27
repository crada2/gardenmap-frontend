import React from "react";
import "../assets/styles/servicesGarden.css";
import { Link } from "react-router-dom";


const ServicesGarden = ({ title, observations, price, onDelete }) => {
  return (
    // <div className="fakecard">
    //   <table className="fakeCardTable">
    //     <ul>
    //       <h1 className="activitieFake">
    //         <img
    //           src="https://cdn-icons.flaticon.com/png/512/1892/premium/1892747.png?token=exp=1648044295~hmac=dc66fab5b5ac787ca10522c1f38da44c"
    //           alt=""
    //         />
    //       </h1>
    //       <div className="infoServiceFake">
    //         <p>🚜 {title}</p></div>
    //         <ul className="dentroFake">
    //         <li> Join us and pet the ponies</li>
    //       </ul>
          
          
    //       <div className="infoServiceFake">
    //         <p>🚜 Observations: </p>
    //         </div>
    //         <p>{observations}</p>

 
    //       <ul className="dentroFake">
  
    //         <li> actividad con niños y cesta regalo</li>
    //       </ul>
    //       <div className="infoServiceFake"></div>
    //         <p>🚜 Precio: {price} </p>
    //         <ul className="dentroFake">
    //         <li> por dia: 40$</li>
    //         <li> por mes 150$</li>
    //       </ul>
          
    //       <div className="buttonFake">
    //         <button className="deleteFake" onClick={onDelete}></button>
    //         <button className="createFake"></button>
    //       </div>
    //     </ul>
    //   </table>
    // </div>

    <div className="card-service">
      <section className="card-service_title">{title}</section>
      <section className="card-service_info">
  
        <article card-service_info> 
         <h4>Servive:</h4>  {observations} <br />
         <br />
         <h4>Price Service:</h4> {price}$  

        </article>
        <div className="card-service_btn" >
         
              <Link className="btn-service_delete" to="/garden">
                   <img src="https://media1.giphy.com/media/TxfZ3ARFjpWgELUMCI/giphy.gif?cid=ecf05e47fq0f0d1jkx1hnvyrj7nbtt55f0jzxfakyg08wdj7&rid=giphy.gif&ct=g" alt="" />
              </Link>
          
        </div>
      </section>
      
    </div>
  );
};

export default ServicesGarden;
