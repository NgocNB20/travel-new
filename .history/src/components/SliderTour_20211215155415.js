import React from 'react'
import Slider from "react-slick";
import Tour from './Tour';
 
function SliderTour() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        arrows: true,
        slidesToScroll:4,
        centerPadding: 30
      };
    return (
        <Slider {...settings}>
            <Tour/>
            <Tour/>
            <Tour/>
            <Tour/>
            <Tour/>
            <Tour/>
        </Slider>
    )
}

export default SliderTour
