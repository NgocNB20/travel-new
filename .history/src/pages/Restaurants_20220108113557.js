
import React from 'react';
import Banner from '../components/Banner';
import Pagination from '../components/pagination';
import ListRestaurant from '../components/restaurant/ListRestaurant';
import anh2 from '../images/anh2.jpg';

function Restaurants() {
    const toggler=()=>{
        console.log(document.querySelector('.tour-sidebar__search tour-sidebar__single'));
       
    }
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
                                    <div className="tour-sidebar__sorter-single">
                                    <div className="tour-sidebar__sorter-top">
                                    <h3>Loại hình</h3>
                                    <button className="tour-sidebar__sorter-toggler toggled" onClick={()=>toggler()}>
                                    <i className="fa fa-angle-down" />
                                    </button></div>
                                    <div className="tour-sidebar__sorter-content" style={{display: 'none'}}>
                                        <div className="tour-sidebar__sorter-inputs">
                                            <p>
                                                <input type="checkbox" id="type-1" name="types" defaultValue={1} />
                                                <label htmlFor="type-1">Nhà hàng</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" id="type-2" name="types" defaultValue={2} />
                                                <label htmlFor="type-2">Quán ăn</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" id="type-3" name="types" defaultValue={3} />
                                                <label htmlFor="type-3">Cơ sở đạt chuẩn phục vụ khách du lịch</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" id="type-4" name="types" defaultValue={4} />
                                                <label htmlFor="type-4">Trà, cà phê và thức uống</label>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    </div>
                                    
                                </div>
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
                                    <div className="tour-sidebar__sorter-single">
                                    <div className="tour-sidebar__sorter-top">
                                    <h3>Loại hình</h3>
                                    <button className="tour-sidebar__sorter-toggler toggled" onClick={()=>toggler()}>
                                    <i className="fa fa-angle-down" />
                                    </button></div>
                                    <div className="tour-sidebar__sorter-content" style={{display: 'none'}}>
                                        <div className="tour-sidebar__sorter-inputs">
                                            <p>
                                                <input type="checkbox" id="type-1" name="types" defaultValue={1} />
                                                <label htmlFor="type-1">Nhà hàng</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" id="type-2" name="types" defaultValue={2} />
                                                <label htmlFor="type-2">Quán ăn</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" id="type-3" name="types" defaultValue={3} />
                                                <label htmlFor="type-3">Cơ sở đạt chuẩn phục vụ khách du lịch</label>
                                            </p>
                                            <p>
                                                <input type="checkbox" id="type-4" name="types" defaultValue={4} />
                                                <label htmlFor="type-4">Trà, cà phê và thức uống</label>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    </div>
                                    
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
