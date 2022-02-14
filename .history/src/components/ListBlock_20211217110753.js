import React from 'react';
import Blog from './Blog';
import Pagination from './pagination';
 
import {useContext } from 'react';
import { BlogContext } from '../contexts/BlogContext';

function ListBlock() {
    const {blogs} = useContext(BlogContext);
    const item=blogs.data;
    item.forEach(a=>{
        console.log(a);
    })
    

    return (
        <section className="blog-one blog-one__grid">
            <div className="container">
                <div className="row">
            {
                item.map(a=><Blog/>)
            }
                </div>
                <Pagination/>
            </div>
        </section>
    )
}

export default ListBlock
