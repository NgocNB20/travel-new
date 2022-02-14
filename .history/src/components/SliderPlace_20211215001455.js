import React from 'react'
import Slider from "react-slick";
import SinglePlace from './SinglePlace';

function SliderPlace() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll:4,
        centerPadding: 30
      };
    return (
        <div className="container"> 
        <Slider {...settings}>
           <SinglePlace/>
           <SinglePlace/>
           <SinglePlace/>
           <SinglePlace/>
           <SinglePlace/>
           <SinglePlace/>
        </Slider>
  </div>
    )
}

export default SliderPlace
