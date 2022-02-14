import React from 'react'
import { Link } from 'react-router-dom'
import styledPlace from './StyledPlace'

function Place({place}) {
    return (
        <div class="destinations-three__single">         
            <div style={{width: '100%', height: '415px', backgroundImage: 'url(/DataFiles/2021/06/Files/20210605-172201-MMczG9Oq.jpeg)'}} classname="bg-img"/>
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

export default  Place
