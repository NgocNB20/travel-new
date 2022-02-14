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
        setBlogs(response.data);
    }
    fethApi();
    const [blogs, setBlogs] = useState([]);
    },[])
    if(blogs.length>0){
        console.log("a")
    }
    

    return (
        <section className="blog-one blog-one__grid">
            <div className="container">
                <div className="row">
                {console.log(blogs)}
                 <Blog blog={blogs} />
             
                </div>
                <Pagination/>
            </div>
        </section>
    )
}

export default ListBlock
