import React from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constants/constant'

function RestaurantDetail() {
    return (
        <div className="tour-details__content">

            <div className="tour-two__top">
                <div className="tour-two__top-left">
                    <h3>Khu sinh Thái Đền Hùng – Budapest</h3>
                    <div className="tour-one__stars">
                        <span className="pl-3">0 Đánh giá</span>                        
                        <span className="pl-3"><i className="fas fa-eye mr-1" />12 Lượt xem</span>
                        <Link to="#" className="add-favorite">
                            <i className="fa fa-heart ml-3"></i>
                            <span id="Tour_Likes_2">112 Lượt thích</span>
                        </Link>
                    </div>
                </div>
                 
            </div>

            <ul className="tour-one__meta list-unstyled">
                <li><Link to="#"><i className="far fa-clock" />12</Link></li>
                <li><Link to="#"><i className="far fa-user-circle" />11</Link></li>
                <li><Link to="#"><i className="far fa-bookmark" /> </Link></li>
                <li><Link to="#"><i className="fas fa-bus-alt" />abc</Link></li>
            </ul>
         
                                <div   class="tour-details__gallery-image slider-image">
                                    <img src={constant.URL_IMAGE_TOUR+'anh1'} alt=""/>
                                </div> 
                            

            <h3 className="tour-details__title">Giới thiệu</h3>
            <div className="blog-details__details"></div>
            <h3 className="tour-details__subtitle">Điều khoản và bao gồm</h3>
            <div className="blog-details__details sub-detail"></div>

        </div>
        
    )
}

export default RestaurantDetail
