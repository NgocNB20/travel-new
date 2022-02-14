import React from 'react'
import { Link } from 'react-router-dom';
import anh2 from '../assets/image/anh2.jpg';

function SidebarPost({blogs}) {
    console.log(blogs);
    const listItems = blogs.map((blog) =>
    <li>
        <div className="sidebar__post-image">
            <div style={{width: '61px', height: '63px', backgroundImage: `url("${anh2}")`}} className="bg-img" />
        </div>
        <div className="sidebar__post-content">
            <h3><Link to="#">{blog.title}</Link></h3>
        </div>
    </li>
   
);


    
    return (
        <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Tin cùng chuyên mục</h3>
            <ul className="sidebar__post-list list-unstyled">
                {listItems}
            </ul>
        </div>
    )
}

export default SidebarPost
