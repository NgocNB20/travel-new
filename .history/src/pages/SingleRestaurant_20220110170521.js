import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import FormComent from '../components/FormComent'
import RestaurantDetail from '../components/restaurant/RestaurantDetail'
import RestaurantSidebar from '../components/restaurant/RestaurantSidebar'
import TourDetail from '../components/tours/TourDetail'
import TourSidebar from '../components/tours/TourSidebar'
import Share from './Share';
import restaurantService from '../services/RestaurantService';
 
function SingleRestaurant() {
    const [restaurant,SetRestaurant] = useState({});
    const {id} = useParams();
    const {name,address,numberLike,numberView,detail,imageRestaurants}=restaurant;

    useEffect(()=>{
        window.scrollTo(0, 0);  
        const fetchData = async ()=>{
        const response= await restaurantService.get(id);
        if(response.data.success){
            console.log(response.data.data);
            SetRestaurant(response.data.data);
            }                 
        }
        try{
            fetchData();
        }
        catch(error){
            console.log(error);
        }

        },[id]);



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

