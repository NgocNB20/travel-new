import React from 'react'
import { Link} from 'react-router-dom';
import constant from '../constants/constant';

function SidebarPost({blogs}) {
     
       
    return (
        <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Tin cùng chuyên mục</h3>
            <ul className="sidebar__post-list list-unstyled">
                {
                    blogs.map((blog) =>
                    <li>
                        <div className="sidebar__post-image">
                            <div style={{width: '61px', height: '63px', backgroundImage: `url("${constant.URL_IMAGE+blog.image}")`}} className="bg-img" />
                        </div>
                        <div className="sidebar__post-content">
                            <h3><Link to={`/vi/blogs/detail/${blog.id}`}>{blog.title}</Link></h3>
                        </div>
                    </li>
)
                }
            </ul>
        </div>
    )
}

export default SidebarPost
