import React from 'react'
import anh2 from '../assets/image/anh2.jpg';
import Banner from '../components/Banner';
import {useEffect, useState} from 'react';
import blogsService from '../services/blogsService';
import Share from './Share';
import { useParams } from 'react-router';
import SidebarPost from './SidebarPost';
import FormComent from '../components/FormComent';
import { Link } from 'react-router-dom';
import constant from "../constants/constant.js";
import Error from './Error';
import BlogDetail from './BlogDetail';
 

function SingleBlog() {
    const [blog,setBlog] = useState({});
    const {id} = useParams();
    const {image,title}={...blog};
    
    useEffect(()=>{
        const fetchData = async ()=>{
        const response= await blogsService.get(id);
        if(response.data.success){
            setBlog(response.data.data);
            }                 
        }
        try{
            fetchData();
        }
        catch(error){
            console.log(error);
        } 
        },[]);
        
    if(blog.id === undefined){
        return <Error error={constant.BLOG_NOTFOUND} />;
    }   
    else 
        return (
            <>
        <Banner/>
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-details__image">
                            <img src={constant.URL_IMAGE+image} alt={title} className="img-fluid" />
                        </div>
                        <BlogDetail blog={blog}/>
                        <FormComent/>
                    </div>
                    <div className="col-lg-4">
                        <SidebarPost/>
                        <SidebarPost/>
                    </div>                 
                </div>
                </div>     
        </section> 
        </>
    )
}

export default SingleBlog
