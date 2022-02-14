import React from 'react'

function Search({getKeyWord}) {
    return (
        <div className="tour-sidebar__sorter-wrap p-3">
            <div className="tour-sidebar__search tour-sidebar__single p-3">
                <h3>Tìm địa điểm</h3>
                <div className="tour-sidebar__search-form" id="restaurant-search-form">
                    <div className="form-group">
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-warning btn-block" onClick={()=>console.log("a")}>Tìm kiếm</button>
                    </div>
                </div>               
            </div>
        </div>
    )
}

export default Search
