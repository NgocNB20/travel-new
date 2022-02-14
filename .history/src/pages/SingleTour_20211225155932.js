import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import tourService from '../services/TourService';
import Share from './Share';
import anh2 from '../images/anh2.jpg';
import FormComent from '../components/FormComent';
import Error from './Error';
import constant from '../constants/constant';
import Tour from '../components/tours/Tour';
import TourComent from '../components/tours/TourComent';
import TourDetail from '../components/tours/TourDetail';

function SingleTour() {
    const [tour,setTour] = useState({});
    const {id} = useParams();
    const{title,numberView,numberLike,rate,detail
        ,price,totalDay,totalPerson,departure,imageTours,subDetail}={...tour};
  
        let formatNumber = Intl.NumberFormat('en-US');
        const priceFormat=formatNumber.format(price);
        
    

    useEffect(()=>{
        window.scrollTo(0, 0);  
        const fetchData = async ()=>{
        const response= await tourService.get(id);
        if(response.data.success){
            console.log(response.data.data);
            setTour(response.data.data);
            }                 
        }
        try{
            fetchData();
        }
        catch(error){
            console.log(error);
        }

        },[id]);
        if(tour.id === undefined){
            return <Error error={constant.TOUR_NOTFOUND} />;
        }   
        else  

    return (
        <>
            <Banner title={tour.title} page="tour du lịch"/>
            <section className="tour-two tour-list">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <TourDetail tour={tour}/>
                            <Share/>
                            <FormComent/>
                        </div>
                        <div className="col-lg-4">
                            form
                        </div>
                </div>     
                </div>

            </section>
        </>
    )
}

export default SingleTour
