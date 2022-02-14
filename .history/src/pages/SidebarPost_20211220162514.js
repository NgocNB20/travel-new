import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import anh2 from '../assets/image/anh2.jpg';
import constant from '../constants/constant';

function SidebarPost({blogs}) {
    console.log(blogs);
 


    
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
                            <h3><NavLink to={`/vi/blogs/detail/${blog.id}`}>{blog.title}</NavLink></h3>
                        </div>
                    </li>
)
                }
            </ul>
        </div>
    )
}

export default SidebarPost
