import React from 'react';
import Blog from './Blog';
import blogsService from '../services/blogsService';
import Pagination from './pagination';
 
import {useContext,useEffect,useState } from 'react';
 

function ListBlock() {

    const [blogs, setBlogs] = useState([]);
    useEffect( ()=>{
    const fethApi=async()=>{
        const response= await blogsService.getAll();  
        await setBlogs(response.data);
    }
    fethApi();
    },[])
    if(blogs.length==0){
        console.log("a"+blogs.length)
    }
    

    return (
        <section className="blog-one blog-one__grid">
            <div className="container">
                <div className="row">
                
                 <Blog blog={blogs} />
             
                </div>
                <Pagination/>
            </div>
        </section>
    )
}

export default ListBlock
