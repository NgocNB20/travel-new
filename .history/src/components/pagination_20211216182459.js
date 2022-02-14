import React from 'react'

function Pagination() {
    return (
        <div className="post-pagination">
            <a href="/vi/blogs/tintuc-24/page1"><i className="fa fa-angle-left"></i></a>
            <a className="active" href="/vi/blogs/tintuc-24/page1">01</a>
            <a href="/vi/blogs/tintuc-24/page2">02</a>
            <a href="/vi/blogs/tintuc-24/page2"><i className="fa fa-angle-right" /></a>    
        </div>
    )
}

export default Pagination
