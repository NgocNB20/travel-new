import React from 'react';
import Blog from './Blog';
import blogsService from '../services/blogsService';
import Pagination from './pagination';
 
import {useContext,useEffect,useState } from 'react';
 

function ListBlock() {

    const [blogs, setBlogs] = useState([]);  
    useEffect( ()=>{
    const fethApi=async(a)=>{
        const response= await blogsService.getAll();
        console.log(response.data)
        setBlogs(response.data);             
    }
    fethApi();
    },[])
    
    
     
      
    
    

    return (
        <section className="blog-one blog-one__grid">
            <div className="container">
                <div className="row">
                {
                    blogs.map(blog =><Blog blog={blog}></Blog>)
                }

             
                </div>
                <Pagination/>
            </div>
        </section>
    )
}

export default ListBlock
