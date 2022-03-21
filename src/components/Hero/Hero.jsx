/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import BtnSlider from "../Hero/BtnSlider";
import DataSlider from "../Hero/DataSlider";

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== DataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(DataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="hero_slider">
      {DataSlider.map((todo, index) => {
        return (
          <div
            key={todo.id}
            className={slideIndex === index + 1 ? "hero_slide hero_active-anim" : "hero_slide"}
            >
            <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="hero_dots">
        {Array.from({ length: 6 }).map((todo, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "hero_dot active" : "hero_dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
