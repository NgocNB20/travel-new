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

export default Blog;
{/* <div className="blog-one__single ">
<div className="blog-one__image">
    <StyledBlog image='./image/anh2.jpg'>
    <div className="bg-img"  />
    </StyledBlog>
    <Link to="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13"><i className="far fa-arrow-right"></i></Link>
</div>
<div className="blog-one__content">
    <ul className="list-unstyled blog-one__meta">
        <li> <Link to="#"><i className="far fa-calendar-alt" />{blog.date}</Link> </li>
        <li> <Link to="#" title="Lượt xem"><i className="far fa-eye" />{blog.numberView}</Link> </li>
        <li> <Link to="#" title="Lượt thích"><i className="far fa-heart" />{blog.numberLike}</Link> </li>
    </ul>
    <h3>
        <Link to="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13">{blog.title}</Link>
    </h3>
    <p className="multi-line-truncate">{url==='/vi'?"":`Phong trào "người Việt Nam đi du lịch Việt Nam" đang được hội đam mê xê dịch hưởng ứng nhiệt tình. Bằng chứng là cứ đến cuối tuần hay dịp nghỉ lễ, các khu nghỉ dưỡng ven đô luôn trong tình trạng "cháy phòng".`}</p>
</div>
</div> */}
