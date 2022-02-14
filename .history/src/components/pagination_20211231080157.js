import React from 'react'
import { Link } from 'react-router-dom'

function Pagination({ onClick, totalPage }) {
     
    return (
        <div className="post-pagination">
            <Link to="/vi/blogs/tintuc-24/page1"><i className="fa fa-angle-left"></i></Link>
            
            {
                totalPage.map((page,index) =>{
                    return (<Link key={index} onClick={()=>onClick(page)} >{page}</Link>)
                })
            }
             
            <Link to="/vi/blogs/tintuc-24/page2"><i className="fa fa-angle-right" /></Link>    
        </div>
    )
}

export default Pagination
