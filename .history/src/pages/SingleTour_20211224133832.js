import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import tourService from '../services/TourService';

function SingleTour() {
    const [tour,setTour] = useState({});
    const {id} = useParams();

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
    

    return (
        <>
            <Banner title={tour.title} page="tour du lịch"/>
        </>
    )
}

export default SingleTour
