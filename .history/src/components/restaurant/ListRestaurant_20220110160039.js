import React from 'react';
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
                                     
                                    <Restaurant restaurant={restaurant}/>
                                    
                                )
                            })
                        }     
                    
                    
                </div>
                
                
                
            </div>
        </div>      
    )
}

export default ListRestaurant
