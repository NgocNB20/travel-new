import React from 'react'
import Slider from "react-slick";
import Place from './Place';
import {useContext} from 'react';
import {PlaceContext} from '../contexts/PlaceContext';
 

function SliderPlace() {
    const {places} = useContext(PlaceContext);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll:4,
        centerPadding: 30
      };
  if(places.data !== undefined) {

      return (
          <div className="container"> 
          <Slider {...settings}>
            <Place/>
            <Place/>
            <Place/>
            <Place/>
            <Place/>
            <Place/>
            <Place/>
          </Slider>
        </div>
      )
  }else return ("");
}

export default SliderPlace;
