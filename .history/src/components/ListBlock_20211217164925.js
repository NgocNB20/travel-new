import React from 'react';
import Blog from './Blog';
import Pagination from './pagination';
import blogsService from '../services/blogsService';
import {useContext,useEffect,useState } from 'react';
import { BlogContext} from '../contexts/BlogContext';

function ListBlock() {

    
    const {blogs} = useContext(BlogContext);
    
     

    if(blogs.data !== undefined) {
        console.log(blogs.data);
        return (
            <section className="blog-one blog-one__grid">
                <div className="container">
                    <div className="row">
                     { 
                         Array.from(blogs.data).map(blog =>{
                             return (<div className="col-lg-4 col-md-6">
                            <Blog blog={blog} />
                        </div> )

                         })
                     } 
 
  
     
                   
                    </div>
                    <Pagination/>
                </div>
            </section>
        )
    }
    



}

export default ListBlock
