/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import leftArrow from "../../assets/img/arrow-lefth.svg";
import rightArrow from "../../assets/img/arrow-right.svg";
import "../../assets/styles/hero.css";

export default function BtnSlider({ direction, moveSlide }) {
  //console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next" ? "herobtn-slide next" : "herobtn-slide prev"
      }
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
