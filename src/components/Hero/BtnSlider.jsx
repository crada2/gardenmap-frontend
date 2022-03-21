/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import leftArrow from "../../assets/img/left-arrow.svg";
import rightArrow from "../../assets/img/right-arrow.svg";
import "../../assets/styles/hero.css";

export default function BtnSlider({ direction, moveSlide }) {
  //console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "hero_btn-slide next" : "hero_btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
