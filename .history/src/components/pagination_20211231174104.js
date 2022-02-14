import React from 'react'
import { Link } from 'react-router-dom'

function Pagination({ onClick, totalPage }) {
    const tagSpan=document.querySelector('.post-pagination span');
    console.log(tagSpan);
     
    const pages=[...Array(totalPage).keys()].map(number=>number+1);
    console.log(pages)
    let indents = [];
    const log=()=>{console.log("kkk")};
    for (let i = 1; i < totalPage+1; i++) {
    indents.push(<span key={i} onClick={() =>onClick(i)}>{i}</span>);
    }
     
    return (
        <div className="post-pagination">
            <span to="/vi/blogs/tintuc-24/page1"><i className="fa fa-angle-left"></i></span>        
            {
                pages.map((page,index) =>{
                    return <span key={index} onClick={()=>console.log("click"),() =>onClick(page)}>{page}</span>;
            })
            }
            
            
            <span to="/vi/blogs/tintuc-24/page2"><i className="fa fa-angle-right" /></span>    
        </div>
    )
}

export default Pagination
