import React from 'react'
import anh2 from '../assets/image/anh2.jpg';
import Banner from '../components/Banner';
import {useEffect, useState} from 'react';
import blogsService from '../services/blogsService';
import Share from './Share';
import SidebarPost from './SidebarPost';
import FormComent from '../components/FormComent';
import { Link } from 'react-router-dom';
 

function SingleBlog() {
    const [blog,setBlog] = useState([]);
    
 
    useEffect( ()=>{
        const fethApi = async ()=>{
            const response= await blogsService.get("1");
    
            console.log( document.querySelector('.blog-details__details').innerHTML=response.data.data.detail)
            setBlog(response.data.data.detail);           
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
                            <img src={anh2} alt="Giới thiệu chung về tỉnh Phú Thọ" className="img-fluid" />
                        </div>
                        <div className="blog-details__content">
                            <ul className="list-unstyled blog-one__meta">
                                <li><Link to="#"><i className="far fa-calendar-alt" /> 05/06/2021</Link></li>
                                <li><Link to="#"><i className="far fa-comments" /> 0 Bình luận</Link></li>
                                <li><Link to="#"><i className="fas fa-eye" /> 48 Lượt xem</Link></li>
                                <li><Link to="#" className="add-favorite"><i className="fa fa-heart" /><span id="Blog_Likes_1">2</span> Lượt thích</Link></li>
                            </ul>
                            <h3>Giới thiệu chung về tỉnh Phú Thọ</h3>
                            <p className="blog-details__summary">Phú Thọ là một tỉnh thuộc vùng Đông Bắc Bộ, Việt Nam. Phía đông giáp tỉnh Vĩnh Phúc và thủ đô Hà Nội, phía tây giáp tỉnh Sơn La và tỉnh Yên Bái, phía nam giáp tỉnh Hòa Bình, phía bắc giáp tỉnh Tuyên Quang.  Đây là tỉnh nằm trong quy hoạch vùng thủ đô Hà Nội.</p>
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
