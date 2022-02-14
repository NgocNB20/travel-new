import React from 'react';
import Pagination from '../pagination';
import Restaurant from './Restaurant';

function ListRestaurant({restaurants,page}) {
    console.log(page);
    console.log(restaurants);

    return (      
        <div id="restaurant-grid">
            <div className="isotope-wrapper">
                <div className="row">
                { 
                            Array.from(restaurants).map((restaurant,index) => {
                            return (
                                    <div key={index} className="col-lg-4 col-md-6">
                                    <Restaurant restaurant={restaurant}/>
                                    </div>
                                )
                            })
                        }     
                    
                    
                </div>
                <Pagination/>
                
                
            </div>
        </div>      
    )
}

export default ListRestaurant
