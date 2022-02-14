import React from 'react';
import Blog from './Blog';
import blogsService from '../services/blogsService';
import Pagination from './pagination';
 
import {useContext,useEffect,useState } from 'react';
 

function ListBlock() {

    const [blogs, setBlogs] = useState([]);
    var a ;
    useEffect( ()=>{
    const fethApi=async(a)=>{
        const response= await blogsService.getAll();
              a=response.data;             
    }
    fethApi();
    },[])
    console.log(a)
    
     
      
    
    

    return (
        <section className="blog-one blog-one__grid">
            <div className="container">
                <div className="row">
                

             
                </div>
                <Pagination/>
            </div>
        </section>
    )
}

export default ListBlock
