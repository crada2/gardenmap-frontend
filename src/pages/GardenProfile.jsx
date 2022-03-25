/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unreachable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import MainProfile from "../components/MainProfile";
import ServicesGarden from "../components/ServicesGarden";
import "../assets/styles/gardenProfile.css";
import swal from "sweetalert";

const GardenProfile = () => {
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState([]);
  const [users] = useState([]);

  useEffect(() => {
    setLoading(false);
    axios.get("http://localhost:8080/products/user").then((res) => {
      console.log("los productos del usuario son: ",res.data);
      setService(res.data);
     
    });
  }, []);

  //DELETE
  const deleteDataAPI = (id) => {
    axios.delete(`http://localhost:8080/products/${id}`).then(
      (res) => {
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
        <MainProfile users={users} />
      </div>
      <div className="garden_grid-container">{renderProfile()}</div>
    </div>
  );
};

export default GardenProfile;
