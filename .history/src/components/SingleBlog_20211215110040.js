import React from 'react'
import { Link } from 'react-router-dom'
import StyledBlog from './StyledBlog'

function SingleBlog({blog}) {
    return (
        <div className="blog-one__single ">
            <div className="blog-one__image">
                <StyledBlog>
                <div style={{width: '100%', height: '300px' }} className="bg-img" />
                </StyledBlog>
                <Link to="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13"><i className="far fa-arrow-right"></i></Link>
            </div>
            <div className="blog-one__content">
                <ul className="list-unstyled blog-one__meta">
                    <li><Link to="#"><i className="far fa-calendar-alt" /> 05/06/2021</Link></li>
                    <li><Link to="#" title="Lượt xem"><i className="far fa-eye" /> 11</Link></li>
                    <li><Link to="#" title="Lượt thích"><i className="far fa-heart" />1</Link></li>
                </ul>
                <h3>
                    <Link to="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13">Dự án nghỉ dưỡng tại Phú Thọ - Nổi bật nhờ những dịch vụ độc đáo</Link>
                </h3>
                <p class="multi-line-truncate">Phong trào "người Việt Nam đi du lịch Việt Nam" đang được hội đam mê xê dịch hưởng ứng nhiệt tình. Bằng chứng là cứ đến cuối tuần hay dịp nghỉ lễ, các khu nghỉ dưỡng ven đô luôn trong tình trạng "cháy phòng".</p>
            </div>
        </div>
    )
}

export default SingleBlog

