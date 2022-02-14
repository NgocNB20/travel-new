import React from 'react';
import { Link } from 'react-router-dom';
 

function Pagination({ onClick, totalPage }) {
    const tagSpan=document.getElementsByClassName('page');
    const addActive=(i)=>{
       
        if(tagSpan.length>0){
           tagSpan[i].classList.add("active")
        }
    }
    
     
     
    const pages=[...Array(totalPage).keys()].map(number=>number+1);
 
   
    
     
    return (
        <div className="post-pagination">
            <span ><i className="fa fa-angle-left"></i></span>        
            {
                pages.map((page,index) =>{
                    return <span className="page" key={index} onClick={() =>{onClick(page);addActive(page)}}>{page}</span>;
            })
            }
            
            
            <span ><i className="fa fa-angle-right" /></span>    
        </div>
    )
}

export default Pagination
