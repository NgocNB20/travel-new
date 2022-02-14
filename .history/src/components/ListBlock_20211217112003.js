import React from 'react';
import Blog from './Blog';
import Pagination from './pagination';
 
import {useContext } from 'react';
import { BlogContext } from '../contexts/BlogContext';

function ListBlock() {
    const {blogs} = useContext(BlogContext);
    const item=blogs.data;
    const array1 = [1, 4, 9, 16];
    console.log(array1[0]);
    

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
