import React from 'react';
import { Link } from 'react-router-dom';
 

function Pagination({ onClick, totalPage }) {
  
     
     
    const pages=[...Array(totalPage).keys()].map(number=>number+1);
    const handlePageClick=(data)=>{
        console.log(data);
    }
   
    
     
    return (
        <div className="post-pagination">
            <span ><i className="fa fa-angle-left"></i></span>        
            {
                pages.map((page,index) =>{
                    return <span className="page" key={index} onClick={(event) =>{onClick(page);handlePageClick()}}>{page}</span>;
            })
            }
            
            
            <span ><i className="fa fa-angle-right" /></span>    
        </div>
    )
}

export default Pagination
