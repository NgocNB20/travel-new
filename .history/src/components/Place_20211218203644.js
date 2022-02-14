import React from 'react'
import { Link } from 'react-router-dom'
import anh2 from '../assets/image/anh2.jpg';
import StyledPlace from "./StyledPlace";

function Place({place}) {
    const {name,address} = place;
    console.log(name);
    return (
        <div className="destinations-three__single">
            <StyledPlace image={anh2}>
               <div className="bg-img"/>
            </StyledPlace>
            <div className="destinations-three__content">
                <h3><Link to="/vi/place/details/den-hung-1">{name}</Link></h3>
                <ul className="list-unstyled">
                    <li><Link to="/vi/place/details/"><i className="fas fa-eye" /> 28</Link></li>
                    <li><Link to="/vi/place/details/"><i className="far fa-heart" /> 1</Link></li>
                </ul>
            </div>
            <div className="destinations-three__hover-content">
                <h3><Link to="/vi/place/details/den-hung-1">{name}</Link></h3>    
                <p>{address}</p>
                <Link to="/vi/place/details/den-hung-1" className="destinations-three__link">
                <i className="far fa-arrow-right"/>
                </Link>
            </div>
        </div>
        
    )
}

export default  Place
