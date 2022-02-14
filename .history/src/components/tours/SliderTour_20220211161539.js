import React, { useContext } from 'react'
import Slider from "react-slick";
import { TourContext } from '../../contexts/TourContext';
import Tour from './Tour';
 
function SliderTour() {
    const {tours} = useContext(TourContext); 
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
      if(tours.data !== undefined) {
        return (
            <Slider {...settings}>
                 
                { 
                Array.from(tours.data).map((tour,index) => {
                    return (
                                <Tour key={index}  tour={tour} />
                            )
                })
            }        
                 
            </Slider>
        )
      }return ("");
    
}

export default SliderTour
