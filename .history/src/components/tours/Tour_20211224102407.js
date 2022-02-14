import React from 'react'
import { Link } from 'react-router-dom'
import StyledTour from './StyledTour'
import anh2 from '../../assets/image/anh2.jpg';


function Tour({tour}) {
    const{id,title,numberView,numberLike
        ,rate,detail,price,totalDay
        ,totalPerson,departure,imageTours}=tour;
        let dollarUSLocale = Intl.NumberFormat('en-US');

    return (
        <div className="tour-one__single">
            <div className="tour-one__image">
            <StyledTour image={anh2}>
                <div className="bg-img" />
            </StyledTour>
               
                <Link to="#" className="add-favorite"><i className="fa fa-heart" />{numberLike}</Link>
            </div>
            <div className="tour-one__content">
                <div className="tour-one__stars"><i className="fa fa-star star-color-0" /></div>
                <h3>
                    <Link to="/vi/tour/details/du-lich-den-hung-den-mau-au-co-tai-phu-tho-1-ngay-8">{title}</Link>
                </h3>
                <p><span>{dollarUSLocale.format(price)}</span> / Người</p>
                <ul className="tour-one__meta list-unstyled">
                    <li><Link to="#"><i className="far fa-clock" />{totalDay}</Link></li>
                    <li><Link to="#"><i className="far fa-user-circle" />{totalPerson}+</Link></li>
                    <li><Link to="#"><i className="far fa-map" />{departure}</Link></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Tour
