import React from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constants/constant';
import anh2 from '../../images/anh2.jpg'

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
            <div className="blog-details__image"><img src={anh2} alt="Khu sinh Thái Đền Hùng – Budapest" className="img-fluid"/></div> 
            <h3 class="tour-details__title">Giới thiệu</h3>
            <div className="blog-details__details">
                <p>Được thiết kế theo phong cách Châu Âu, hiện đại đan xen hương vị thuần túy của mảnh đất địa linh Phú Thọ. Khu nghỉ dưỡng sinh thái Đền Hùng Budapest là địa điểm tin cậy của quý khách mỗi dịp về với quê cha đất tổ. Budapest có một không gian yên tĩnh thoáng đãng thích hợp cho việc nghỉ ngơi thư giãn cuối tuần sau những giờ làm việc căng thẳng, mệt mỏi. Với diện tích lên tới 14.000 mét vuông Budapest còn là sự lựa chọn thích hợp cho tổ chức tiệc cưới, tiệc sinh nhật, hội nghị và các buổi họp mặt. Budapest có nhiều phòng ăn thoáng đãng, sang trọng thích hợp cho cả gia đình và tập thể. Nhà hàng có đội ngũ đầu bếp chuyên nghiệp, thực đơn phong phú các món ăn về chủng loại, đảm bảo vệ sinh an toàn thực phẩm, phục vụ theo nhu cầu của quý khách từ các món ăn bình dân cho đến các món ăn đặc sắc của Châu Âu và Châu Á.<br/></p>
            </div>
            <h3 class="tour-details__subtitle">Dịch vụ tiện ích</h3>
                            

             
            <div className="blog-details__details"></div>
            <h3 className="tour-details__subtitle">Điều khoản và bao gồm</h3>
            <div className="blog-details__details sub-detail"></div>

        </div>
        
    )
}

export default RestaurantDetail
