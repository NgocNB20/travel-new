import React from 'react'
import { Link } from 'react-router-dom'

function SinglePlace({place}) {
    return (
        <div class="destinations-three__single">
            <div style={{width: '100%', height: '415px', backgroundImage: 'url(/static/media/anh1.jpg)'}} className="bg-img" />
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

export default SinglePlace
