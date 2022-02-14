import React from 'react'
import Banner from '../components/Banner'
import FormComent from '../components/FormComent'
import RestaurantDetail from '../components/restaurant/RestaurantDetail'
import RestaurantSidebar from '../components/restaurant/RestaurantSidebar'
import TourDetail from '../components/tours/TourDetail'
import TourSidebar from '../components/tours/TourSidebar'
import Share from './Share'
 

function SingleRestaurant() {
    return (
        <>
            <Banner title={"Khu sinh Thái Đền Hùng – Budapest"} page="Ẩm Thực"/>
            <section className="tour-two tour-list">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <RestaurantDetail/>
                            <Share/>
                            <FormComent/>
                        </div>
                        <div className="col-lg-4">
                            <RestaurantSidebar/>
                        </div>
                    </div>     
                </div>

            </section>
        </>
    )
}

export default SingleRestaurant

