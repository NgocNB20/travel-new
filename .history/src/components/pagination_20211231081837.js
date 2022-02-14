import React from 'react'
import { Link } from 'react-router-dom'

function Pagination({ onClick, totalPage }) {
    
    let indents = [];
for (let i = 0; i < this.props.level; i++) {
  indents.push(<span key={i} onClick={()=>onClick(i)}>0{i}</span> );
}
     
    return (
        <div className="post-pagination">
            <Link to="/vi/blogs/tintuc-24/page1"><i className="fa fa-angle-left"></i></Link>        
            {indents}
            
            <Link to="/vi/blogs/tintuc-24/page2">02</Link>
            <Link to="/vi/blogs/tintuc-24/page2"><i className="fa fa-angle-right" /></Link>    
        </div>
    )
}

export default Pagination
