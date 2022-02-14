import React from 'react'
import { Link } from 'react-router-dom'

function Pagination({ onClick, totalPage }) {
    console.log(totalPage);
    return (
        <div className="post-pagination">
            <Link to="/vi/blogs/tintuc-24/page1"><i className="fa fa-angle-left"></i></Link>
            <a className="active" href="/vi/blogs/tintuc-24/page1">01</a>
            <a href="/vi/blogs/tintuc-24/page2">02</a>
            <a href="/vi/blogs/tintuc-24/page2"><i className="fa fa-angle-right" /></a>    
        </div>
    )
}

export default Pagination
