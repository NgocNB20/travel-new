import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import tourService from '../services/TourService';
import Share from './Share';
import anh2 from '../images/anh2.jpg';
import FormComent from '../components/FormComent';
import Error from './Error';
import constant from '../constants/constant';
import Tour from '../components/tours/Tour';
import TourComent from '../components/tours/TourComent';

function SingleTour() {
    const [tour,setTour] = useState({});
    const {id} = useParams();
    const{title,numberView,numberLike,rate,detail
        ,price,totalDay,totalPerson,departure,imageTours,subDetail}={...tour};
        const data = "Blog is not present"
         
              
         
        let formatNumber = Intl.NumberFormat('en-US');
        const priceFormat=formatNumber.format(price);
        
    

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
        if(tour.id === undefined){
            return <Error error={constant.TOUR_NOTFOUND} />;
        }   
        else  

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
                                        <h3>{title}</h3>
                                        <div className="tour-one__stars">
                                            
                                                0 Đánh giá
                                                <span className="pl-3"><i className="fas fa-eye mr-1" />{numberView} Lượt xem</span>
                                                <a href="#" className="add-favorite">
                                                <i className="fa fa-heart ml-3" />
                                                <span id="Tour_Likes_2">1</span>{numberLike} Lượt thích</a>
                                        </div>
                                    </div>
                                    <div className="tour-two__right"><p><span>{priceFormat}</span><br />/Người</p></div>
                                </div>
                                <ul className="tour-one__meta list-unstyled">
                                    <li><a><i className="far fa-clock" />{totalDay}</a></li>
                                    <li><a><i className="far fa-user-circle" />{totalPerson}</a></li>
                                    <li><a><i className="far fa-bookmark" /> </a></li>
                                    <li><a><i className="fas fa-bus-alt" />{departure}</a></li>
                                </ul>   
                                <div class="tour-details__gallery-image"><img src={constant.URL_IMAGE_TOUR+imageTours[0].url} alt=""/></div>
                                
                                <h3 className="tour-details__title">Giới thiệu</h3>
                                <div className="blog-details__details"></div>
                                <h3 className="tour-details__subtitle">Điều khoản và bao gồm</h3>
                                <div className="blog-details__details sub-detail"></div>
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
                                <TourComent/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            form
                        </div>
                </div>     
                </div>

            </section>
        </>
    )
}

export default SingleTour
