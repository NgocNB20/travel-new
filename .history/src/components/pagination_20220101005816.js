import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
 

function Pagination({ onClick, totalPage }) {
    const handlePageClick=(data)=>{
            console.log(data.selected);
    }
   
    const addActive=()=>{
        const tagSpan=document.getElementsByClassName('page');
         console.log(totalPage[0]);
    }
    
     
     
    const pages=[...Array(totalPage).keys()].map(number=>number+1);
 
   
    
     
    return (
        <div className="post-pagination">
        <ReactPaginate
       
        nextLabel={<span><i className="fa fa-angle-left"></i></span>}
        previousLabel={<span ><i className="fa fa-angle-right" /></span>}
        breakLabel="..."  
        pageCount={15}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page'}

        
       
        renderOnZeroPageCount={null}
      />
               
             
            {
                pages.map((page,index) =>{
                    return <span dataPage={page} className="page" key={index} onClick={() =>{onClick(page)}}>{page}</span>;
            })
            }
            
            
                
        </div>
    )
}

export default Pagination
