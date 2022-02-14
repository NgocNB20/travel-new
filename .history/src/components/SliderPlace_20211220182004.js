import React from 'react'
import Slider from "react-slick";
import Place from './Place';
import {useContext} from 'react';
import {PlaceContext} from '../contexts/PlaceContext';
 

function SliderPlace() {
    const {places} = useContext(PlaceContext);
    console.log(places);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll:3,
        centerPadding: 30
      };
  if(places.data !== undefined) {

      return (
          <div className="container"> 
          <Slider {...settings}>
          { 
                Array.from(places.data).map(
                  (place,index) => {
                    return (
                              <Place key={index}  place={place} />
                            )
                  })
            }                 
          </Slider>
        </div>
      )
  }else return ("");
}

export default SliderPlace;
