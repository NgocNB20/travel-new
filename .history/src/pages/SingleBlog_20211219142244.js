import React from 'react'
import { Link } from 'react-router-dom';
import anh2 from '../assets/image/anh2.jpg';
import Banner from '../components/Banner';
import {useEffect, useState} from 'react';
import blogsService from '../services/blogsService';


function SingleBlog() {
    const [blog,setBlog] = useState({});

    useEffect( ()=>{
        const fethApi = async ()=>{
            const response= await blogsService.get(1);   
            console.log(blog);    
            setBlog(response.data);
              
        }
        fethApi();
        },[])
    return (
        <>
        <Banner/>
  
        </>
    )
}

export default SingleBlog
