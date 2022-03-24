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
  const [user, setUser] = useState([]);

  useEffect(() => {
    setLoading(false);
    axios.get("http://localhost:8080/users").then((res) => {
      console.log(res.data.product);
      setUser(res.data);
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
        <MainProfile user={user} />
      </div>
      <div className="garden_grid-container">{renderProfile()}</div>
      <ServicesGarden />
    </div>
  );
};

export default GardenProfile;
