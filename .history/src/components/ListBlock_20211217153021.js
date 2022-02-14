import React from 'react';
import Blog from './Blog';
import Pagination from './pagination';
import blogsService from '../services/blogsService';
import {BlogContext,useEffect,useState } from 'react';
 

function ListBlock() {

    //const {blogs} = useContext(BlogContext);
    const [blogs, setBlogs] = useState([]);  
    useEffect( ()=>{
    const fethApi = async()=>{
        const response =  blogsService.getAll();
        console.log(response.data)
        setBlogs(response.data);             
    }
    fethApi();
    },[])
    


    return (
        <section className="blog-one blog-one__grid">
            <div className="container">
                <div className="row">

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
