import React, { useContext } from 'react'
import Banner from '../components/Banner'
import ListTour from '../components/tours/ListTour'
import { TourContext } from '../contexts/TourContext';

function Tours() {
    const {tours} = useContext(TourContext);
    return (
        <div>              
            <Banner page="Tour Du Lịch"/>
            <ListTour tours={tours}/>
        </div>
    )
}

export default Tours
