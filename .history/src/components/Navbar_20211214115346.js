import React from 'react';
 
import {Link} from 'react-router-dom';
// import  { useState } from 'react';
 
 
 

function Navbar() {
    // const [isOpen,setIsOpen]= useState(false);
    // const handleToggle =()=>{setIsOpen(!isOpen);};
    return (
        // <nav className="navbar">
        //     <div className="nav-center">
        //     <div className="nav-header">
        //         <Link to="/">
        //             <h1>Logo</h1>
        //         </Link>
        //         <button className="nav-btn" type="button" onClick={handleToggle}>
                     
        //         </button>
        //     </div>
        //     <ul className={isOpen ? "nav-links show-nav":"nav-links"}>
        //         <li>
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //             <Link to="/rooms">Rooms</Link>
        //         </li>

        //     </ul>
        //     </div>
        // </nav>
        
        <header className="main-nav__header-one">
        <nav className="header-navigation stricky original">
          <div className="container">
            <div className="main-nav__logo-box">
              <Link to="/vi" className="main-nav__logo">
                <img src="/image/logo.png" className="main-logo" width="123px" alt="Cổng thông tin du lịch Phú Thọ" /></Link>
              <Link to="/" className="side-menu__toggler"><i className="fa fa-bars" /></Link>
            </div>
            <div className="main-nav__main-navigation">
              <ul className="main-nav__navigation-box">
                <li><Link  to="/vi"  >TRANG CHỦ</Link></li>
                <li><Link to="http://phutho.vietnaminfo.net/vi/blog/details/gioi-thieu-chung-ve-tinh-phu-tho-1">GIỚI THIỆU</Link></li>
                <li><Link to="/vi/places"  >ĐIỂM DU LỊCH</Link></li>
                <li><Link to="/vi/vtours"  >KHÁM PHÁ 3D</Link></li>
                <li><Link to="/vi/tours"  >TOUR DU LỊCH</Link></li>
                <li><Link to="/vi/blogs/tin-tuc-24" >TIN TỨC</Link></li>
                <li><Link to="/vi/hotels"  >LƯU TRÚ</Link></li>
                <li><Link to="/vi/agencies"  >LỮ HÀNH</Link></li>
                <li><Link to="/vi/restaurants"  >ẨM THỰC</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <nav class="header-navigation stricky stricked-menu">
                    <div class="container">
                        <div class="main-nav__logo-box"><a href="/vi" class="main-nav__logo"><img
                                    src="/DataFiles/2021/06/Files/20210604-231727-KjblRVcf.png" class="main-logo"
                                    width="123px" alt="Cổng thông tin du lịch Phú Thọ"></a><a href="#"
                                class="side-menu__toggler"><i class="fa fa-bars"></i></a></div>
                        <div class="main-nav__main-navigation">
                            <ul class="main-nav__navigation-box">
                                <li><a href="/vi" target="">TRANG CHỦ</a></li>
                                <li><a href="http://phutho.vietnaminfo.net/vi/blog/details/gioi-thieu-chung-ve-tinh-phu-tho-1"
                                        target="">GIỚI THIỆU</a></li>
                                <li><a href="/vi/places" target="">ĐIỂM DU LỊCH</a></li>
                                <li><a href="/vi/vtours" target="">KHÁM PHÁ 3D</a></li>
                                <li><a href="/vi/tours" target="">TOUR DU LỊCH</a></li>
                                <li><a href="/vi/blogs/tin-tuc-24" target="">TIN TỨC</a></li>
                                <li><a href="/vi/hotels" target="">LƯU TRÚ</a></li>
                                <li><a href="/vi/agencies" target="">LỮ HÀNH</a></li>
                                <li><a href="/vi/restaurants" target="">ẨM THỰC</a></li>
                            </ul>
                        </div>
                    </div>
                </nav> */}  
      </header>

    )
}

 
export default Navbar

