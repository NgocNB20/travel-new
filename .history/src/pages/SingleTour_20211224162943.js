import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import tourService from '../services/TourService';
import Share from './Share';
import anh2 from '../images/anh2.jpg';
import FormComent from '../components/FormComent';

function SingleTour() {
    const [tour,setTour] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        window.scrollTo(0, 0);  
        const fetchData = async ()=>{
        const response= await tourService.get(id);
        if(response.data.success){
            console.log(response.data.data);
            setTour(response.data.data);
            }                 
        }
        try{
            fetchData();
        }
        catch(error){
            console.log(error);
        }

        },[id]);
    

    return (
        <>
            <Banner title={tour.title} page="tour du lịch"/>
            <section className="tour-two tour-list">
                <div className="container">
                    <div className="row">
                            <div className="col-lg-8">
                            <div className="tour-details__content">
                <div className="tour-two__top">
                    <div className="tour-two__top-left">
                        <h3>Tour du lịch Tết âm lịch: Hà Giang - Lũng Cú - Đền Hùng 5 ngày, khởi hành từ Sài Gòn</h3>
                        <div className="tour-one__stars">
                            <div className="star-rating" title={0}>
                            <div className="back-stars">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <div className="front-stars" style={{width: '0%'}}>
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                </div>
                            </div>
                            </div>
                            0 Đánh giá
                                <span className="pl-3"><i className="fas fa-eye mr-1" />20 Lượt xem</span>
                                <a href="#" className="add-favorite" data-type="Tour" data-id={2} data-lang="vi">
                                <i className="fa fa-heart ml-3" />
                                <span id="Tour_Likes_2">1</span> Lượt thích</a>
                        </div>
                    </div>
                    <div className="tour-two__right"><p><span>11,199,000</span><br />/Người</p></div>
                </div>
                <ul className="tour-one__meta list-unstyled">
                    <li><a><i className="far fa-clock" /> 5 Ngày 4 Đêm </a></li>
                    <li><a><i className="far fa-user-circle" /> 15</a></li>
                    <li><a><i className="far fa-bookmark" /> </a></li>
                    <li><a><i className="fas fa-bus-alt" /> Thành phố Hồ Chí Minh</a></li>
                </ul>
                <div class="tour-details__gallery-image"><img src={anh2} alt=""/></div>
                
                <h3 className="tour-details__title">Giới thiệu</h3>
                <div className="blog-details__details"></div>
                <h3 className="tour-details__subtitle">Điều khoản và bao gồm</h3>
                <div className="blog-details__details"></div>
                <Share/>
                <h3 className="tour-details__title">Điểm đánh giá</h3>
                <div className="tour-details__review-comment">
                    <div className="tour-details__review-comment-single">
                        <div className="tour-details__review-comment-top">
                            <img src= {anh2} alt="" />
                                <h3>aaaaaaaaa</h3><p>26/11/2021</p>
                        </div>
                        <div className="tour-details__review-comment-content">
                            <h3>123</h3>
                            <p>123</p>
                        </div>
                        <div className="tour-details__review-form-stars">
                        <div className="row" /></div>
                    </div>
                </div>
                <h3 className="tour-details__title">Viết đánh giá</h3>
                <div className="tour-details__review-form">
                    <div class="tour-details__review-form-stars">
                        <div class="row">
                            <div class="col-md-4">
                                <p><span>Dịch vụ</span> </p>
                                    <div id="reviewItem1" data-rating-input="#reviewStar1" data-rating-color="#fcd703" data-rating-half="true" data-rating-stars="5" data-rating-value="0" rating="true" style="color: rgb(252, 215, 3);">
                                        <i class="fas fa-star" style="cursor: pointer; width: 22px;"></i>
                                        <i class="fas fa-star-half-alt" style="cursor: pointer; width: 22px;"></i><i class="far fa-star" style="cursor: pointer; width: 22px;"></i>
                                        <i class="far fa-star" style="cursor: pointer; width: 22px;"></i>
                                        <i class="far fa-star" style="cursor: pointer; width: 22px;"></i>
                                    </div>
                                        <input type="hidden" id="reviewStar1" value="1.5" data-id="1"/>
                                            <p></p>
                            </div>
                        </div>
                    <FormComent/>
                </div>

            </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleTour
