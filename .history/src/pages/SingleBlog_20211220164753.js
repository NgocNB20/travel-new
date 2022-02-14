import React from 'react'
import Banner from '../components/Banner';
import {useEffect, useState} from 'react';
import blogsService from '../services/blogsService';
import { useParams } from 'react-router';
import SidebarPost from './SidebarPost';
import FormComent from '../components/FormComent';
import constant from "../constants/constant.js";
import BlogDetail from './BlogDetail';
import Error from './Error';
import { Link } from 'react-router-dom';
 

function SingleBlog() {

    const [blog,setBlog] = useState({});
    const [blogs,setBlogs] = useState([]);
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

        },[id]);




    useEffect(()=>{
        const fetchData = async ()=>{
        const response= await blogsService.getTop(id);
        if(response.data.success){
            setBlogs(response.data.data);
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
        <Banner title={title} page="Tin tức"/>
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
                                <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Tin cùng chuyên mục</h3>
            <ul className="sidebar__post-list list-unstyled">
                {
                    blogs.map((blog) =>
                    <li>
                        <div className="sidebar__post-image">
                            <div style={{width: '61px', height: '63px', backgroundImage: `url("${constant.URL_IMAGE+blog.image}")`}} className="bg-img" />
                        </div>
                        <div className="sidebar__post-content">
                            <h3><Link to={`/vi/blogs/detail/${blog.id}`}>{blog.title}</Link></h3>
                        </div>
                    </li>
)
                }
            </ul>
        </div>
                    </div>                 
                </div>
                </div>     
        </section> 
        </>
    )
}

export default SingleBlog


