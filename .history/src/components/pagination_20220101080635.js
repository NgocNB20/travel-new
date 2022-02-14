import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
 

function Pagination({ onClick, totalPage }) {
    const handlePageClick=(data)=>{
           let numberPage = data.selected;
            onClick(numberPage+1);
    }
   
  
     
    const pages=[...Array(totalPage).keys()].map(number=>number+1);
 
   
    
     
    return (
        <div className="post-pagination">
        <ReactPaginate
       
        nextLabel={<span ><i className="fa fa-angle-right" /></span>}
        previousLabel={<span><i className="fa fa-angle-left"></i></span>}
        breakLabel="..."  
        pageCount={totalPage}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        activeClassName={'active1'}

        
       
        renderOnZeroPageCount={null}
      />
               
        
            
            
                
        </div>
    )
}

export default Pagination
