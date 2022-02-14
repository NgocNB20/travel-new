import React from 'react';
import { Link } from 'react-router-dom';
import  { useEffect , useState } from 'react';
import placesService from '../services/placesService';
import constant from '../constants/constant';
import styledPlace from './places/StyledPlace';

function SiteFooterRight() {
  const [places,setPlaces] = useState({});
    useEffect( ()=>{
        const fethApi = async ()=>{
            const response= await placesService.getTopSix();    
            setPlaces(response.data);
        }
        fethApi();
        },[])
 
  if(places.data!==undefined){
    return (

      <div className="col-md-4">
        <h3 className="footer-widget__title">Gallery</h3>
        <ul className="footer-widget__gallery-list list-unstyled">
        {
          places.data.map((place,index)=>{
            return (
               
              <styledPlace image={constant.URL_IMAGE_PLACE+place.imagePlaces[0].url}>
               <div className="bg-img"/>
            </styledPlace>
               
            )
          })
          
   
        }
          
        </ul>
        <div className="visitors"><span className="stats">
          <i className="fa fa-users" /> Total: 
            <span className="number">6365</span></span>
            <span className="stats">
              <i className="fa fa-user" /> Onlines:
              <span className="number" id="onlines">1</span>
            </span>
        </div>
      </div>
  
    )
  }return("");
  
}

export default SiteFooterRight
