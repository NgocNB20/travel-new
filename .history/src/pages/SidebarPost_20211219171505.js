import React from 'react'
import { Link } from 'react-router-dom';
import anh2 from '../assets/image/anh2.jpg';

function SidebarPost() {
    return (
        <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Tin cùng chuyên mục</h3>
            <ul className="sidebar__post-list list-unstyled">
                <li>
                    <div className="sidebar__post-image">
                        <div style={{width: '61px', height: '63px', backgroundImage: `url("${anh2}")`}} className="bg-img" />
                    </div>
                    <div className="sidebar__post-content">
                        <h3><Link to="#">Dự án nghỉ dưỡng tại Phú Thọ - Nổi bật nhờ những dịch vụ độc đáo</Link></h3>
                    </div>
                </li>
                <li>
                    <div className="sidebar__post-image">
                        <div style={{width: '61px', height: '63px', backgroundImage: `url("${anh2}")`}} className="bg-img" />
                    </div>
                    <div className="sidebar__post-content">
                        <h3><a href="/vi/blog/details/phu-tho-sap-co-them-khu-do-thi-trung-vuong-rong-20-ha-12">Phú Thọ sắp có thêm khu đô thị Trưng Vương rộng 20 ha</a></h3>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SidebarPost
