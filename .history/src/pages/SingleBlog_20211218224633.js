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
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </section> 
    )
}

export default SingleBlog
