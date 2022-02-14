import React from 'react'
import { Link } from 'react-router-dom'

function Pagination({ onClick, totalPage }) {
     
    return (
        <div className="post-pagination">
            <Link to="/vi/blogs/tintuc-24/page1"><i className="fa fa-angle-left"></i></Link>
            <Link className="active" to="/vi/blogs/tintuc-24/page1">01</Link>
            <span onClick={()=>onClick(1)}>click</span> 
            <Link to="/vi/blogs/tintuc-24/page2">02</Link>
            <Link to="/vi/blogs/tintuc-24/page2"><i className="fa fa-angle-right" /></Link>    
        </div>
    )
}

export default Pagination
