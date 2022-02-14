
import React from 'react';
import Banner from '../components/Banner';
import Pagination from '../components/pagination';
import ListRestaurant from '../components/restaurant/ListRestaurant';
import anh2 from '../images/anh2.jpg';

function Restaurants() {
    return (
        <div>
            <Banner page="ẩm thực" title="Ẩm thực"/>
            <section className="tour-one tour-grid" style={{paddingTop: '50px'}} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4" >
                            <div className="tour-sidebar__sorter-wrap p-3">
                                <div className="tour-sidebar__search tour-sidebar__single p-3">
                                    <h3>Tìm địa điểm</h3>
                                    <div className="tour-sidebar__search-form" id="restaurant-search-form">
                                        <div className="form-group">
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <button type="button" className="btn btn-warning btn-block">Tìm kiếm</button>
                                        </div>
                                    </div>
                                          <div className="tour-sidebar__sorter-single"><div className="tour-sidebar__sorter-top"><h3>Khu vực</h3><button className="tour-sidebar__sorter-toggler toggled"><i className="fa fa-angle-down" /></button></div><div className="tour-sidebar__sorter-content" style={{display: 'none'}}><div className="tour-sidebar__price-range"><div className="input-group"><div className="dropdown bootstrap-select"><select className="selectpicker" id="ddlDistID" tabIndex={-98}><option value={0}>Chọn khu vực</option><option value={3412}>Huyện Cẩm Khê</option><option value={3283}>Huyện Đoan Hùng</option><option value={3312}>Huyện Hạ Hoà</option><option value={3465}>Huyện Lâm Thao</option><option value={3374}>Huyện Phù Ninh</option><option value={3444}>Huyện Tam Nông</option><option value={3520}>Huyện Tân Sơn</option><option value={3346}>Huyện Thanh Ba</option><option value={3480}>Huyện Thanh Sơn</option><option value={3504}>Huyện Thanh Thuỷ</option><option value={3394}>Huyện Yên Lập</option><option value={3248}>Thành phố Việt Trì</option><option value={3272}>Thị xã Phú Thọ</option></select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="ddlDistID" title="Chọn khu vực" aria-expanded="false"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Chọn khu vực</div></div> </div></button><div className="dropdown-menu" role="combobox" x-placement="bottom-start" style={{maxHeight: '402px', overflow: 'hidden', minHeight: '131px', minWidth: '220px', position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(0px, 544px, 0px)'}} x-out-of-boundaries><div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1} style={{maxHeight: '400px', overflowY: 'auto', minHeight: '129px'}}><ul className="dropdown-menu inner show"><li className="selected active"><a role="option" className="dropdown-item selected active" aria-disabled="false" tabIndex={0} aria-selected="true"><span className="text">Chọn khu vực</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Huyện Cẩm Khê</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Huyện Đoan Hùng</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Huyện Hạ Hoà</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Huyện Lâm Thao</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Huyện Phù Ninh</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Huyện Tam Nông</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Huyện Tân Sơn</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Huyện Thanh Ba</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Huyện Thanh Sơn</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Huyện Thanh Thuỷ</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Huyện Yên Lập</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Thành phố Việt Trì</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabIndex={0} aria-selected="false"><span className="text">Thị xã Phú Thọ</span></a></li></ul></div></div></div></div></div></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8" id="restaurant-results" >
                            <div className="tour-sorter-one">
                                <h3><span className="total">18</span> địa điểm ẩm thực được tìm thấy.</h3>
                            </div>
                            <ListRestaurant/>
                            <Pagination/>
 
                        </div>
                    </div>
                </div>
            </section>      
        </div>
    )
}

export default Restaurants
