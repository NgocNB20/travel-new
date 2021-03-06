import React from 'react';
import { Link } from 'react-router-dom';
import constant from "../../constants/constant.js";

function Restaurant({restaurant}) {
    const {id,name,address,numberLike,numberView,imageRestaurants}=restaurant;
    return (
        <div className="col-md-6 isotope-item">
        <div className="box_grid">  
            <figure>
                <Link to="#" className="wish_bt add-favorite">
                    <span id="Restaurant_Likes_1" style={{float: 'right', marginLeft: '5px'}}>{numberLike}  </span>
                </Link>
                <Link to="#">
                    <div className="img-bg bg-img" style={{height: '210px', width: '100%', backgroundImage: `url(${constant.URL_IMAGE_RESTAURANT+imageRestaurants[0].url})`}} />                    
                </Link>
                <small>Thành phố Việt Trì</small>
            </figure>
            <div className="wrapper">                                                
                <h3><Link to={`/vi/restaurants/detail/${id}`}>{name}</Link></h3>
                <p>{address}</p>
            </div>
            <ul style={{overflow: 'hidden'}}>
                <li><i className="fas fa-eye" /> {numberView} Lượt xem</li>
                <li><i className="far fa-heart" /> {numberLike} Lượt thích</li>
            </ul>
        </div>
        </div> 
    )
}

export default Restaurant
