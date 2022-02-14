import React from 'react'

function SiteFooterCenter() {
    return (
        <div className="col-md-3">
        <h3 className="footer-widget__title">Liên kết</h3>
        <ul className="footer-icon-links-list list-unstyled">
          <li><a href="/vi/places"><i className="fas fa-camera-retro" /> Điểm du lịch</a></li>
          <li><a href="/vi/vtours"><i className="fas fa-cube" /> Khám phá 3D</a></li>
          <li><a href="/vi/agencies"><i className="fas fa-store-alt" /> Lữ hành</a></li>
          <li><a href="/vi/tours"><i className="fas fa-route" /> Tour du lịch</a></li>
          <li><a href="/vi/hotels"><i className="fas fa-hotel" /> Lưu trú</a></li>
          <li><a href="/vi/restaurants"><i className="fas fa-utensils" /> Ẩm thực</a></li>
          <li><a href="/vi/shops"><i className="fas fa-shopping-cart" /> Mua sắm</a></li>
          <li><a href="/vi/entertainment"><i className="fas fa-music" /> Điểm vui chơi giải trí</a></li>
          <li><a href="/vi/tourplan/create"><i className="fas fa-map-marked-alt" /> Tạo lịch trình</a></li>
          <li><a href="/vi/tourplan"><i className="fas fa-map-marked-alt" /> Lịch trình tour</a></li>
          <li><a href="/vi/address/book"><i className="fas fa-address-book" /> Danh bạ</a></li>
          <li><a href="/vi/contact"><i className="fas fa-address-card" /> Liên hệ</a></li>
          <li><a href="/vi/terms-of-use"><i className="fas fa-file-contract" /> Điều khoản sử dụng</a></li>
          <li><a href="/vi/privacy-policy"><i className="fas fa-file-contract" /> Chính sách bảo mật</a></li>
        </ul>
      </div>
    )
}

export default SiteFooterCenter
