
import React from 'react';
import Banner from '../components/Banner';
import Pagination from '../components/pagination';
import ListRestaurant from '../components/restaurant/ListRestaurant';
import anh2 from '../images/anh2.jpg';

function Restaurants() {
    const toggler=()=>{
        let selector=document.querySelector('.toggled');
        console.log(selector);
        if(selector){
            console.log("toggled")
            document.querySelector('.tour-sidebar__sorter-toggler').classList.remove("toggled");
            document.querySelector('.tour-sidebar__sorter-content').style.display='block';
        }else{
            console.log("toggled")
            document.querySelector('.tour-sidebar__sorter-toggler').classList.add("toggled");
            document.querySelector('.tour-sidebar__sorter-content').style.display='none';
        }
       
    }
    return (
        <div>
            <Banner page="ẩm thực" title="Ẩm thực"/>
            <section className="tour-one tour-grid" style={{paddingTop: '50px'}} >
                <div className="container">
                    <div className="row">
                        
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
