import React from 'react';
import Blog from './Blog';
import Pagination from './pagination';
 
import {useContext } from 'react';
import { BlogContext } from '../contexts/BlogContext';

function ListBlock() {
    const {blogs} = useContext(BlogContext);
    const item=blogs.data;
    const array1 = ['a', 'b', 'c'];

    array1.forEach(element => console.log(element));
    

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