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
 

function SingleBlog() {
    const [blog,setBlog] = useState({});
    const {id} = useParams();
    const {numberView,numberComment,numberLike,date,image,title,detail,detailSummary}={...blog};
    
    useEffect(()=>{
        const fethApi = async ()=>{
        const response= await blogsService.get(id);
        console.log("success"+response.success)
        if(response.data.success===false){
           
             return <Error/> ;
        }else{
            setBlog(response.data.data);
        }
                   
        }
        fethApi();
        },[]);   

      
    return (
        <>
        <Banner/>
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-details__image">
                            <img src={constant.URL_IMAGE+image} alt="Giới thiệu chung về tỉnh Phú Thọ" className="img-fluid" />
                        </div>
                        <div className="blog-details__content">
                            <ul className="list-unstyled blog-one__meta">
                                <li><Link to="#"><i className="far fa-calendar-alt" />{date}</Link></li>
                                <li><Link to="#"><i className="far fa-comments" /> {numberComment} Bình luận</Link></li>
                                <li><Link to="#"><i className="fas fa-eye" /> {numberView} Lượt xem</Link></li>
                                <li><Link to="#" className="add-favorite"><i className="fa fa-heart" /><span id="Blog_Likes_1">2</span> Lượt thích</Link></li>
                            </ul>
                            <h3>{title}</h3>
                            <p className="blog-details__summary">{detailSummary}</p>
                            <div className="blog-details__details"/>
                            <Share/>                          
                        </div>
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
