import React from 'react'
import Slider from "react-slick";
import SingleTour from './SingleTour';
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
            <SingleTour/>
            <SingleTour/>
            <SingleTour/>
            <SingleTour/>
            <SingleTour/>
            <SingleTour/>
        </Slider>
    )
}

export default SliderTour
