import React from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constants/constant';
import anh2 from '../../images/anh2.jpg'

function RestaurantDetail({restaurant}) {
    console.log(restaurant);
    const {name,address,numberLike,numberView,detail,imageRestaurants,phone}=restaurant;
    useEffect(() => {
        document.querySelector('.blog-details__details').innerHTML=detail;
    }, [detail])
    return (
        <div className="tour-details__content">

            <div className="tour-two__top">
                <div className="tour-two__top-left">
                    <h3>{name}</h3>
                    <div className="tour-one__stars">
                        <span className="pl-3">0 Đánh giá</span>                        
                        <span className="pl-3"><i className="fas fa-eye mr-1" />{numberView} Lượt xem</span>
                        <Link to="#" className="add-favorite">
                            <i className="fa fa-heart ml-3"></i>
                            <span id="Tour_Likes_2">{numberLike} Lượt thích</span>
                        </Link>
                    </div>
                </div>
                 
            </div>

            <ul className="tour-one__meta list-unstyled">
                <li><a><i className="fas fa-home"></i>{address}</a></li>
                <li><a><i className="fas fa-phone-alt"></i>{phone}</a></li>
            </ul>
            <div className="blog-details__image"><img src={constant.URL_IMAGE_RESTAURANT+imageRestaurants[0].url} alt="Khu sinh Thái Đền Hùng – Budapest" className="img-fluid"/></div> 
            <h3 class="tour-details__title">Giới thiệu</h3>
            <div className="blog-details__details" />
                 
            
            <h3 className="tour-details__subtitle">Dịch vụ tiện ích</h3>
            <ul className="tour-details__list list-unstyled">
                <li><i className="fa fa-check"></i> Wifi miễn phí</li>
                <li><i className="fa fa-check"></i> Hoá đơn đỏ</li>
                <li><i className="fa fa-check"></i> Phục vụ tại bàn</li>
                <li><i className="fa fa-check"></i> Phòng riêng</li>
                <li><i className="fa fa-check"></i> Máy lạnh</li>
                <li><i className="fa fa-check"></i> điều hòa</li>
            </ul>
            <h3 className="tour-details__subtitle">Loại món ăn</h3>
            <ul className="tour-details__list list-unstyled">
                <li><i className="fa fa-check"></i>  Hải sản</li>
                <li><i className="fa fa-check"></i>  Đặc sản</li>
            </ul>
            <h3 className="tour-details__subtitle">Thích hợp</h3>
            <ul className="tour-details__list list-unstyled">
                <li><i className="fa fa-check"></i> Công việc</li>
                <li><i className="fa fa-check"></i> làm ăn</li>
                <li><i className="fa fa-check"></i> tiếp khách</li>
                <li><i className="fa fa-check"></i> Gia đình</li>
                <li><i className="fa fa-check"></i> Hội họp</li>
                <li><i className="fa fa-check"></i> Lãng mạn</li>
                <li><i className="fa fa-check"></i> hẹn hò</li>
                <li><i className="fa fa-check"></i> Uống bia</li>
                <li><i className="fa fa-check"></i> nhậu</li>
            </ul>
            <h3 className="tour-details__subtitle">Thực đơn</h3>
            <div className="blog-details__details">
                <p>- Chả các lăng</p>
                <p>- Cá lăng xào cần tỏi</p>
                <p>- Cá lăng nướng</p>
                <p>- Cá lăng om chuối đậu</p>
                <p>- Cá lăng nấu canh chua</p>
                <p>- Các món ăn khác&nbsp;</p>
            </div>
                            

             
            <div className="blog-details__details"></div>
            <h3 className="tour-details__subtitle">Điều khoản và bao gồm</h3>
            <div className="blog-details__details sub-detail"></div>

        </div>
        
    )
}

export default RestaurantDetail
