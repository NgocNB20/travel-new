import React from 'react'
import { Link } from 'react-router-dom'

function Pagination({ onClick, totalPage }) {
    const getValue=()=>{
       console.log(document.querySelector('.post-pagination span').html());
    }
    
    let indents = [];
    const log=()=>{console.log("kkk")};
    for (let i = 1; i < totalPage+1; i++) {
    indents.push(<span key={i} onClick={() =>getValue()}>0{i}</span>);
    }
     
    return (
        <div className="post-pagination">
            <span to="/vi/blogs/tintuc-24/page1"><i className="fa fa-angle-left"></i></span>        
            {indents}
            
            
            <span to="/vi/blogs/tintuc-24/page2"><i className="fa fa-angle-right" /></span>    
        </div>
    )
}

export default Pagination
