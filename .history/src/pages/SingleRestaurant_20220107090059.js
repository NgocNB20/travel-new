import React from 'react'
import Banner from '../components/Banner'
import FormComent from '../components/FormComent'
import TourDetail from '../components/tours/TourDetail'
import TourSidebar from '../components/tours/TourSidebar'

export default function SingleRestaurant() {
    return (
        <>
            <Banner title={"Khu sinh Thái Đền Hùng – Budapest"} page="Ẩm Thực"/>
            <section className="tour-two tour-list">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <TourDetail tour={tour}/>
                            <share/>
                            <FormComent/>
                        </div>
                        <div className="col-lg-4">
                            <TourSidebar/>
                        </div>
                    </div>     
                </div>

            </section>
        </>
    )
}
