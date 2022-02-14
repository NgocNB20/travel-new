import React from 'react'
import anh2 from '../assets/image/anh2.jpg';

function SingleBlog() {
    return (
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
                            <div class="blog-details__bottom"><div class="sidebar__social-list"><span class="px-2">Chia sẻ</span><a href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1&amp;title=Gi%e1%bb%9bi+thi%e1%bb%87u+chung+v%e1%bb%81+t%e1%bb%89nh+Ph%c3%ba+Th%e1%bb%8d" target="_blank"><i class="fab fa-facebook-f"></i></a><a href="https://twitter.com/intent/tweet?url=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1&amp;text=Gi%e1%bb%9bi+thi%e1%bb%87u+chung+v%e1%bb%81+t%e1%bb%89nh+Ph%c3%ba+Th%e1%bb%8d" target="_blank"><i class="fab fa-twitter"></i></a><a href="https://telegram.me/share?url=Gi%e1%bb%9bi+thi%e1%bb%87u+chung+v%e1%bb%81+t%e1%bb%89nh+Ph%c3%ba+Th%e1%bb%8d&amp;text=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1" target="_blank"><i class="fab fa-telegram-plane"></i></a><a href="https://pinterest.com/pin/create/button/?url=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1&amp;media=%2fDataFiles%2f2021%2f06%2fFiles%2f20210605-102218-KYUOhFG9.jpg&amp;description=Gi%e1%bb%9bi+thi%e1%bb%87u+chung+v%e1%bb%81+t%e1%bb%89nh+Ph%c3%ba+Th%e1%bb%8d" target="_blank"><i class="fab fa-pinterest-p"></i></a><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1" target="_blank"><i class="fab fa-linkedin-in"></i></a></div></div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </section> 
    )
}

export default SingleBlog
