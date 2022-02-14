import React from 'react'
import { Link } from 'react-router-dom';
import anh2 from '../assets/image/anh2.jpg';
import Banner from '../components/Banner';
import {useEffect, useState} from 'react';
import blogsService from '../services/blogsService';


function SingleBlog() {
    const [blog,setBlog] = useState({});

    useEffect( ()=>{
        const fethApi = async ()=>{
            const response= await blogsService.get(1);    
            setBlog(response.data);
            console.log(blog);
            
        }
        fethApi();
        },[])
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
                            <div className="blog-details__details">

                            </div>
                            <div className="blog-details__bottom"><div className="sidebar__social-list"><span className="px-2">Chia sẻ</span><a to="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1&amp;title=Gi%e1%bb%9bi+thi%e1%bb%87u+chung+v%e1%bb%81+t%e1%bb%89nh+Ph%c3%ba+Th%e1%bb%8d" target="_blank"><i class="fab fa-facebook-f"></i></a><a to="https://twitter.com/intent/tweet?url=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1&amp;text=Gi%e1%bb%9bi+thi%e1%bb%87u+chung+v%e1%bb%81+t%e1%bb%89nh+Ph%c3%ba+Th%e1%bb%8d" target="_blank"><i class="fab fa-twitter"></i></a><a to="https://telegram.me/share?url=Gi%e1%bb%9bi+thi%e1%bb%87u+chung+v%e1%bb%81+t%e1%bb%89nh+Ph%c3%ba+Th%e1%bb%8d&amp;text=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1" target="_blank"><i class="fab fa-telegram-plane"></i></a><a to="https://pinterest.com/pin/create/button/?url=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1&amp;media=%2fDataFiles%2f2021%2f06%2fFiles%2f20210605-102218-KYUOhFG9.jpg&amp;description=Gi%e1%bb%9bi+thi%e1%bb%87u+chung+v%e1%bb%81+t%e1%bb%89nh+Ph%c3%ba+Th%e1%bb%8d" target="_blank"><i className="fab fa-pinterest-p"></i></a><a to="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1" target="_blank"><i className="fab fa-linkedin-in"></i></a></div></div>
                           
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
                        <div className="sidebar__single sidebar__post">
                        <h3 className="sidebar__title">Tin cùng chuyên mục</h3>
                            <ul className="sidebar__post-list list-unstyled">
                                <li>
                                    <div className="sidebar__post-image">
                                        <div style={{width: '61px', height: '63px', backgroundImage: `url("${anh2}")`}} className="bg-img" />
                                    </div>
                                    <div className="sidebar__post-content">
                                        <h3><a to="#">Dự án nghỉ dưỡng tại Phú Thọ - Nổi bật nhờ những dịch vụ độc đáo</a></h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar__post-image">
                                        <div style={{width: '61px', height: '63px', backgroundImage: `url("${anh2}")`}} className="bg-img" />
                                    </div>
                                    <div className="sidebar__post-content">
                                        <h3><a to="/vi/blog/details/phu-tho-sap-co-them-khu-do-thi-trung-vuong-rong-20-ha-12">Phú Thọ sắp có thêm khu đô thị Trưng Vương rộng 20 ha</a></h3>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar__single sidebar__post">
                        <h3 className="sidebar__title">Tin mới nhất</h3>
                            <ul className="sidebar__post-list list-unstyled">
                                <li>
                                    <div className="sidebar__post-image">
                                        <div style={{width: '61px', height: '63px', backgroundImage: `url("${anh2}")`}} className="bg-img" />
                                    </div>
                                    <div className="sidebar__post-content">
                                        <h3><a to="#">Dự án nghỉ dưỡng tại Phú Thọ - Nổi bật nhờ những dịch vụ độc đáo</a></h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar__post-image">
                                        <div style={{width: '61px', height: '63px', backgroundImage: `url("${anh2}")`}} className="bg-img" />
                                    </div>
                                    <div className="sidebar__post-content">
                                        <h3><a to="/vi/blog/details/phu-tho-sap-co-them-khu-do-thi-trung-vuong-rong-20-ha-12">Phú Thọ sắp có thêm khu đô thị Trưng Vương rộng 20 ha</a></h3>
                                    </div>
                                </li>
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
