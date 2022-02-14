import React from 'react';
import { Link } from 'react-router-dom';
 

function Pagination({ onClick, totalPage }) {
   
    const addActive=()=>{
        const tagSpan=document.getElementsByClassName('page');
         console.log(totalPage[0]);
    }
    
     
     
    const pages=[...Array(totalPage).keys()].map(number=>number+1);
 
   
    
     
    return (
        <div className="post-pagination">
            <span ><i className="fa fa-angle-left"></i></span>        
            {
                pages.map((page,index) =>{
                    return <span dataPage={page} className="page" key={index} onClick={() =>{onClick(page)},addActive()}>{page}</span>;
            })
            }
            
            
            <span ><i className="fa fa-angle-right" /></span>    
        </div>
    )
}

export default Pagination
