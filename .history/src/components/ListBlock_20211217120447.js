import React from 'react';
import Blog from './Blog';
import Pagination from './pagination';
import blogsService from '../services/blogsService';
import {useContext,useEffect,useState } from 'react';
 

function ListBlock() {


     const [blogs, setBlogs] = useState({});
    useEffect(()=>{
        blogsService.getAll()
        .then(response=>{
            setBlogs(response.data  );
            console.log(blogs.data);    
        })
        .catch(error=>{
          console.log(error);
        })
    },[])

    




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
