
import React from 'react';
import Banner from '../components/Banner';
import Pagination from '../components/pagination';
import anh2 from '../assets/image/anh1.jpeg';

function Restaurants() {
    return (
        <div>
            <Banner page="ẩm thực"/>
            <section className="tour-one tour-grid" style={{paddingTop: '50px'}} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4" >
                            <div className="tour-sidebar__sorter-wrap p-3">
                                <div className="tour-sidebar__search tour-sidebar__single p-3">
                                    <h3>Tìm địa điểm</h3>
                                    <div className="tour-sidebar__search-form" id="restaurant-search-form">
                                        <div className="form-group">
                                            <input type="text" className="form-control"      />
                                        </div>
                                        <div className="form-group">
                                            <button type="button" className="btn btn-warning btn-block">Tìm kiếm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8" id="restaurant-results" >
                            <div className="tour-sorter-one">
                                <h3><span className="total">18</span> địa điểm ẩm thực được tìm thấy.</h3>
                            </div>
                            <div id="restaurant-grid">
                                <div className="isotope-wrapper">
                                    <div className="row">
                                    <div className="col-md-6 isotope-item"><div className="box_grid"><figure><a href="#" className="wish_bt add-favorite" data-type="Restaurant" data-id={1} data-lang="vi"><span id="Restaurant_Likes_1" style={{float: 'right', marginLeft: '5px'}}>0</span></a><a href="/vi/restaurant/details/gogi-house-nuong-han-quoc-viet-lam-plaza-1"><div className="img-bg bg-img" style={{height: '210px', width: '100%', backgroundImage: 'url(/DataFiles/2021/06/Files/20210606-200610-Pk4x2eTX.png)'}} /><div className="read_more"><span>Xem chi tiết</span></div></a><small>Thành phố Việt Trì</small></figure><div className="wrapper"><div className="tour-one__stars"><div className="star-rating" title={0}><div className="back-stars"><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><div className="front-stars" style={{width: '0%'}}><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /></div></div></div> 0</div><h3><a href="/vi/restaurant/details/gogi-house-nuong-han-quoc-viet-lam-plaza-1">GoGi House - Nướng Hàn Quốc - Việt Lâm Plaza</a></h3><p>Tầng 1, Việt Lâm Plaza, 2211 Hùng Vương,  thành phố Việt Trì, tỉnh Phú Thọ</p></div><ul style={{overflow: 'hidden'}}><li><i className="fas fa-eye" /> 5 Lượt xem</li><li><i className="far fa-heart" /> 0 Lượt thích</li></ul></div></div>
                                    </div>
                                    <Pagination/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>      
        </div>
    )
}

export default Restaurants
