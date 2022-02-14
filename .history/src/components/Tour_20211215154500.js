import React from 'react'
import { Link } from 'react-router-dom'


function Tour({tour}) {
    return (
        <div className="tour-one__single">
            <div className="tour-one__image">
                <div style={{height: '292px', backgroundImage: 'url(/static/media/20210605-224142-hJLt5ykB_thumb.df2e9083.jpg)'}} className="bg-img" />
                <Link to="#" className="add-favorite"><i className="fa fa-heart" />0</Link>
            </div>
            <div className="tour-one__content">
                <div className="tour-one__stars"><i className="fa fa-star star-color-0" /> </div>
                <h3>
                    <Link to="/vi/tour/details/du-lich-den-hung-den-mau-au-co-tai-phu-tho-1-ngay-8">Du lịch Đền Hùng - Đền Mẫu Âu Cơ tại Phú Thọ 1 ngày</Link>
                </h3>
                <p><span>490,000</span> / Người</p>
                <ul className="tour-one__meta list-unstyled">
                    <li><Link to="#"><i className="far fa-clock" />1 Ngày</Link></li>
                    <li><Link to="#"><i className="far fa-user-circle" />15+</Link></li>
                    <li><Link to="#"><i className="far fa-map" />Thành phố Hà Nội</Link></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Tour
