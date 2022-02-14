import React from 'react'
import { Link } from 'react-router-dom'
import anh2 from '../assets/image/anh2.jpg';
import styledPlace from './StyledPlace';

function Place({place}) {
    return (
        <div class="destinations-three__single">
             <StyledPlace image={anh2}>
             <div className="bg-img" />
             </StyledPlace>
               
             
            <div className="destinations-three__content">
                <h3><Link to="/vi/place/details/den-hung-1">Đền Hùng</Link></h3>
            </div>
            <div className="destinations-three__hover-content">
                <h3><Link to="/vi/place/details/den-hung-1">Đền Hùng</Link></h3>    
                <p>Thành Phố Việt Trình</p>
                <Link to="/vi/place/details/den-hung-1" className="destinations-three__link">
                <i className="far fa-arrow-right"/>
                </Link>
            </div>
        </div>
        
    )
}

export default Place
