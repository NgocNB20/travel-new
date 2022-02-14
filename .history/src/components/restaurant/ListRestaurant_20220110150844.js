import React from 'react';
import Pagination from '../pagination';
import Restaurant from './Restaurant';

function ListRestaurant() {

    return (      
        <div id="restaurant-grid">
            <div className="isotope-wrapper">
                <div className="row">
                    <Restaurant/>
                    <Restaurant/>
                    <Restaurant/>
                    <Restaurant/>
                </div>
                
                
            </div>
        </div>      
    )
}

export default ListRestaurant
