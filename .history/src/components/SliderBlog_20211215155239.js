import React from 'react'
import Slider from "react-slick";
import Blog from './Blog';

export default function SliderBlog() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll:3,
        centerPadding: 30
      };
    return (
        <div className="container"> 
            <Slider {...settings}>
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
                
            </Slider>
      </div>
    )
}
