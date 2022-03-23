/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unreachable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import MainProfile from "../components/MainProfile";
import ServicesGarden from "../components/ServicesGarden";
import "../assets/styles/gardenProfile.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const GardenProfile = () => {
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState([]);
  const [owner, setOwner] = useState([]);

  useEffect(() => {
    setLoading(false);
    axios.get("http://localhost:8080/owners").then((res) => {
      setService(res.data.content[0].product);
      setOwner(res.data.content[0]);
    });
  }, [setLoading]);

  //DELETE
  const deleteDataAPI = (id) => {
    axios.delete(`http://localhost:8080/products/${id}`).then(
      (res) => {
        console.log(res);
        console.log(res.data);
        swal({
          title: "Deleted service!",
          text: "You clicked the button!",
          icon: "success",
        });
        const updatedGarden = service.filter((profiles) => profiles.id !== id);
        setService(updatedGarden);
      },
      (error) => {
        alert("Operation Failed Here");
      }
    );
  };

  const renderProfile = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return service.map(({ id, observations, title, price }) => (
      <ServicesGarden
        key={id}
        observations={observations}
        title={title}
        price={price}
        onDelete={() => deleteDataAPI(id)}
      />
    ));
  };

  return (
    <div>
      <Hero />
      <div className="garden_profile">
        <MainProfile owner={owner} />
       
      </div>
    <div className="garden_grid-container">{renderProfile()}</div>


    <div className="fakecard">
        <table className="fakeCardTable">
        <ul>
          <h1 className="activitieFake">
          <img src="https://cdn-icons.flaticon.com/png/512/1892/premium/1892747.png?token=exp=1648034885~hmac=7ac726da18ac428e8856f81e77ba1415" alt="" /></h1>
            <div className="infoServiceFake">
              <p>🚜Riding Ponies</p>
            </div>
             <ul className="dentroFake">
                <li> por dia: 40$</li>
                <li> por mes 150$</li>
            </ul>
            <div className="infoServiceFake">
              <p>🚜Visitas guiadas:</p>
            </div>
            <ul className="dentroFake">
              <li> price: 20$/person</li>
              <li> actividad con niños y cesta regalo</li>
            </ul>
            <div className="infoServiceFake">
              <p>🚜Observations</p>
            </div>
            <ul className="dentroFake">
              <li> Join us and pet the ponies</li>
            </ul>
            <div className="buttonFake">
            <button className="deleteFake" onClick={'delete'}></button>
            <button className="createFake" onClick={'create'}></button>
              </div>
          </ul>
        </table>
      </div>



    </div>
  );
};

export default GardenProfile;
