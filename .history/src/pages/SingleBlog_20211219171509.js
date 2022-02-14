import React from 'react'
import anh2 from '../assets/image/anh2.jpg';
import Banner from '../components/Banner';
import {useEffect, useState} from 'react';
import blogsService from '../services/blogsService';
import Share from './Share';
import SidebarPost from './SidebarPost';
 

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
                                <li><a href="#"><i className="far fa-calendar-alt" /> 05/06/2021</a></li>
                                <li><a href="#"><i className="far fa-comments" /> 0 Bình luận</a></li>
                                <li><a href="#"><i className="fas fa-eye" /> 48 Lượt xem</a></li>
                                <li><a href="#" className="add-favorite"><i className="fa fa-heart" /><span id="Blog_Likes_1">2</span> Lượt thích</a></li>
                            </ul>
                            <h3>Giới thiệu chung về tỉnh Phú Thọ</h3>
                            <p className="blog-details__summary">Phú Thọ là một tỉnh thuộc vùng Đông Bắc Bộ, Việt Nam. Phía đông giáp tỉnh Vĩnh Phúc và thủ đô Hà Nội, phía tây giáp tỉnh Sơn La và tỉnh Yên Bái, phía nam giáp tỉnh Hòa Bình, phía bắc giáp tỉnh Tuyên Quang.  Đây là tỉnh nằm trong quy hoạch vùng thủ đô Hà Nội.</p>
                            <div className="blog-details__details">
                                
                            </div>
                            <Share/>
                           
                        </div>
                        <div className="comment-one"><h3 className="comment-one__title">0 bình luận</h3></div>
                        <div className="comment-form" id="comment-form">
                                <input type="hidden" id="hdCommentID" defaultValue />
                                <input type="hidden" id="hdBlogID" defaultValue={1} />
                                <input type="hidden" id="hdLang" defaultValue="vi" />
                                <h3 className="comment-form__title">Viết bình luận của bạn</h3>
                                <form className="contact-one__form">
                                    <div className="row low-gutters">
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <input type="text" id="name" placeholder="Họ và tên" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <input type="text" id="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <textarea id="message" placeholder="Nội dung" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <button type="button" className="thm-btn contact-one__btn">Gửi bình luận</button></div>
                                            </div>
                                        </div>
                                </form>
                                </div>  
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
