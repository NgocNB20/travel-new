import React from 'react'
import { Link } from 'react-router-dom'
import StyledPlace from "./StyledPlace";
import constant from "../../constants/constant.js";

function Place({place}) {
    const {id,name,address,imagePlaces} = place;
    console.log(id);
    return (
        <div className="destinations-three__single">
            <StyledPlace image={constant.URL_IMAGE+imagePlaces[0].url}>
               <div className="bg-img"/>
            </StyledPlace>
            <div className="destinations-three__content">
                <h3><Link to={`/vi/places/`}>{name}</Link></h3>
            </div>
            <div className="destinations-three__hover-content">
                <h3><Link to={`/vi/places/`}>{name}</Link></h3>    
                <p>{address}</p>
                <Link to="/vi/places/details/3" className="destinations-three__link">
                <i className="far fa-arrow-right"/>
                </Link>
            </div>
        </div>
        
    )
}
 

export default  Place;
