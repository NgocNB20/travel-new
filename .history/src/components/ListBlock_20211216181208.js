import React from 'react'
import Blog from './Blog'
import Pagination from './pagination'
import { useEffect, useState } from 'react';

function ListBlock() {
    const [blog, setBlogs] = useState([]);
    return (
        <section className="blog-one blog-one__grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <Blog/>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <Blog/>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <Blog/>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <Blog/>
                    </div>         
                    <div className="col-lg-4 col-md-6">
                        <Blog/>
                    </div>    
                    <div className="col-lg-4 col-md-6">
                        <Blog/>
                    </div>   
                </div>
                <Pagination/>
            </div>
        </section>
    )
}

export default ListBlock
