import React from 'react';
import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import constant from "../constants/constant.js";
import Banner from '../components/common/Banner';
import Error from './Error';
import placesService from '../services/placesService';

import Share from  './Share';
import FormComent from '../components/common/FormComent';
import FormTour from '../components/tours/FormTour.js';
import PlaceDetail from '../components/places/PlaceDetail.js';

function SinglePlace() {
    const [place,setPlace] = useState({});
    const {id} = useParams();
    const {name}={...place};
    
     
   
    useEffect(()=>{
        window.scrollTo(0, 0);  
        const fetchData = async ()=>{
        const response= await placesService.get(id);
        if(response.data.success){
            setPlace(response.data.data);
            }                 
        }
        try{
            fetchData();
        }
        catch(error){
            console.log(error);
        }

        },[id]);

       
        if(place.id === undefined){
            return <Error error={constant.BLOG_NOTFOUND} />;
        }   
        else     

    return (
        <>
             <Banner title={name} page="Điểm du lịch"/>
             <section className="tour-two tour-list destinations-details">
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-8">                       
                            <PlaceDetail place={place}/>                           
                            <Share/>
                            <FormComent/>
                         </div>
                         <div className="col-lg-4">
                             <FormTour />
                         </div>   
                     </div>
                 </div>
             </section>
        </>
    )
}

export default SinglePlace
 