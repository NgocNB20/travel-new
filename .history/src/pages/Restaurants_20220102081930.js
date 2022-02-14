
import React from 'react';
import Banner from '../components/Banner';

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
                                            <input type="text" className="form-control"  />
                                        </div>
                                        <div className="form-group">
                                            <button type="button" className="btn btn-warning btn-block">Tìm kiếm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8" id="restaurant-results" ></div>
                    </div>
                </div>
            </section>      
        </div>
    )
}

export default Restaurants
