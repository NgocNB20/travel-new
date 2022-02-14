import React from 'react';
import Blog from './Blog';
import Pagination from '../pagination';
import {useContext} from 'react';
import {BlogContext} from '../../contexts/BlogContext';

function ListBlock() {

    const {blogs} = useContext(BlogContext);
    
    if(blogs.data !== undefined) {
        return (
            <section className="blog-one blog-one__grid">
                <div className="container">
                    <div className="row">
                     { 
                            Array.from(blogs.data).map((blog,index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6">
                                        <Blog  blog={blog} />
                                </div> 
                                )
                         })
                     } 
 
             
                    </div>
                    <Pagination/>
                </div>
            </section>
        )
    }else{
        return ("");
    }
    



}

export default ListBlock;
