import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import MainProfile from "../components/MainProfile";


const GardenProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    setLoading(false);
    axios.get("http://localhost:8000/items").then((res) => {
      setProfile(res.data);
    });
  }, [setLoading]);

  const renderProfile = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return profile.map(({ id, description,observations, title, price, location }) => (
      <MainProfile
        key={id}
        observations={observations}
        /*description={description}*/
        title={title}
        price={price}
        /*location={location}*/
        
      />
    ));
  };
  
  return (
    <div>
      <Hero />
      <div className="grid-container">{renderProfile()}</div>
     
    </div>
  );
};
export default GardenProfile;
