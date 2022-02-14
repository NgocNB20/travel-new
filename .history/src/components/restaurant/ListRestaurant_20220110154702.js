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
                    <Restaurant/>
                    <Restaurant/>
                    <Restaurant/>
                    <Restaurant/>
                </div>
                <Pagination/>
                
                
            </div>
        </div>      
    )
}

export default ListRestaurant
