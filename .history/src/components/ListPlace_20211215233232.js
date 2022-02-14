import React from 'react'
import Pagination from './pagination'
import Place from './Place'

function ListPlace() {
    return (
        <section className="destinations-three" style={{paddingTop: '50px'}}>
            <div className="container">
                <div className="tour-sorter-one switch-view">
                    <h3><span>18</span> Điểm tham quan</h3>
                    <div className="tour-sorter-one__right">
                        <a href="/vi/places-grid" className="px-2 active" style={{width: 'auto', minWidth: '43px'}}><i className="tripo-icon-squares mr-1" />Lưới</a>
                        <a href="/vi/places-map" className="px-2 " style={{width: 'auto', minWidth: '43px'}}><i className="tripo-icon-placeholder mr-1" />Bản đồ</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <Place/>
                    </div>
                </div>
            </div>
            <Pagination/>
        </section>
    )
}

export default ListPlace
