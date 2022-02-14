import React from 'react'
import constant from '../../constants/constant';

function TourDetail({ tour }) {
    const { title, numberView, numberLike, rate, detail
        , price, totalDay, totalPerson, departure, imageTours, subDetail } = { ...tour };

    let formatNumber = Intl.NumberFormat('en-US');
    const priceFormat = formatNumber.format(price);
    return (
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
            <div className="tour-details__gallery-image"><img src={constant.URL_IMAGE_TOUR + imageTours[0].url} alt="" /></div>
            <h3 className="tour-details__title">Giới thiệu</h3>
            <div className="blog-details__details"></div>
            <h3 className="tour-details__subtitle">Điều khoản và bao gồm</h3>
            <div className="blog-details__details sub-detail"></div>
        </div>
    )
}

export default TourDetail
