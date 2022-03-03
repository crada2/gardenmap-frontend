/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import BtnSlider from '../Hero/BtnSlider'
import DataSlider from '../Hero/DataSlider'


const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(1)

const nextSlide = () => {
    if(slideIndex !== DataSlider.length){
        setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === DataSlider.length){
        setSlideIndex(1)
    }
}

const prevSlide = () => {
    if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
        setSlideIndex(DataSlider.length)
    }
}

const moveDot = index => {
    setSlideIndex(index)
}





  return (
    <div className="container-slider">
    {DataSlider.map((obj, index) => {
        return (
            <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            >
                <img 
                src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                />
            </div>
        )
    })}
    <BtnSlider moveSlide={nextSlide} direction={"next"} />
    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

    <div className="container-dots">
        {Array.from({length: 6}).map((item, index) => (
            <div 
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
        ))}
    </div>
</div>
  )
}

export default Hero