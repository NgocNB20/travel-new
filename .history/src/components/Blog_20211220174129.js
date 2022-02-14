import React from 'react'
import { Link } from 'react-router-dom'
import StyledBlog from './StyledBlog'
import constant from "../constants/constant.js";

function Blog({blog}) {
    const {id,image,title,numberView,numberLike,date,detailSummary} = blog;
    const url=window.location.pathname;
 
    return (
        <div className="blog-one__single ">
          
            <div className="blog-one__image">
                <StyledBlog image={constant.URL_IMAGE+image}>
                <div className="bg-img"/>
                </StyledBlog>
               
                <Link to={`/vi/blogs/detail/${id}`}><i className="far fa-arrow-right"></i></Link>
            </div>
            <div className="blog-one__content">
                <ul className="list-unstyled blog-one__meta">
                    <li> <Link to="#"><i className="far fa-calendar-alt" />{date}</Link> </li>
                    <li> <Link to="#" title="Lượt xem"><i className="far fa-eye" />{numberView}</Link> </li>
                    <li> <Link to="#" title="Lượt thích"><i className="far fa-heart" />{numberLike}</Link> </li>
                </ul>
                <h3>
                    <Link to={`/vi/blogs/detail/${id}`}>{title}</Link>
                </h3>
                <p className="multi-line-truncate">{url==='/vi'?"":`${detailSummary}`}</p>
            </div>
        </div>
    )
}

export default Blog
 
