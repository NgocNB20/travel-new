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
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </section> 
    )
}

export default SingleBlog
