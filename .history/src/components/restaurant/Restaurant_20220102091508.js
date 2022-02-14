import React from 'react'

function Restaurant() {
    return (
        <div className="col-md-6 isotope-item">
        <div className="box_grid">
            <figure>
                 
                <a href="/vi/restaurant/details/gogi-house-nuong-han-quoc-viet-lam-plaza-1">
                    <div className="img-bg bg-img" style={{height: '210px', width: '100%', backgroundImage: `url(${anh2})`}} />
                    <div className="read_more">
                        <span>Xem chi tiết</span>
                    </div>
                </a>
                <small>Thành phố Việt Trì</small>
            </figure>
            <div className="wrapper">                                                
                <h3><a href="/vi/restaurant/details/gogi-house-nuong-han-quoc-viet-lam-plaza-1">GoGi House - Nướng Hàn Quốc - Việt Lâm Plaza</a></h3>
                <p>Tầng 1, Việt Lâm Plaza, 2211 Hùng Vương,  thành phố Việt Trì, tỉnh Phú Thọ</p>
            </div>
            <ul style={{overflow: 'hidden'}}>
                <li><i className="fas fa-eye" /> 5 Lượt xem</li>
                <li><i className="far fa-heart" /> 0 Lượt thích</li>
            </ul>
        </div>
        </div> 
    )
}

export default Restaurant
