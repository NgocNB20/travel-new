import React from 'react'
import Slider from "react-slick";
import Blog from './Blog';
import {useContext} from 'react';
import { BlogContext} from '../contexts/BlogContext';



function SliderBlog() {
    const {blogs} = useContext(BlogContext);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll:3,
        centerPadding: 30
      };
    if(blogs.data !== undefined) {
    return (
        <div className="container"> 
            <Slider {...settings}>
            { 
                Array.from(blogs.data).map((blog,index) => {
                    return (
                                <Blog key={index}  blog={blog} />
                            )
                })
            }                      
            </Slider>
      </div>
    )
}else{
    return ("")
}
}

export default SliderBlog

 
