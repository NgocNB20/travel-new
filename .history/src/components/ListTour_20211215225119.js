import React from 'react'
import Pagination from './pagination'
import Tour from './Tour'

function ListTour() {
    return (
        <section className="tour-one tour-grid" style={{paddingTop: '50px'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <Tour/>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Tour/>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Tour/>
                </div>
                <div className="col-lg-4 col-md-6">
                    <Tour/>
                </div>
            </div>
        <Pagination/>
        </div>
    </section>
    )
}

export default ListTour

