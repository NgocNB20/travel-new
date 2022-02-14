import React from 'react'

function RestaurantSidebar() {
    return (
        <div className="tour-sidebar">
        <div className="tour-sidebar__search tour-sidebar__single"id="book-tour-form">
            <input type="hidden" id="hdBookTourID" defaultValue={5} />
            <input type="hidden" id="hdBookLang" defaultValue="vi" />
            <h3>Đặt tour này</h3>
            <form className="tour-sidebar__search-form">
                <div className="input-group">
                    <input type="text" id="book-name" placeholder="Họ và tên" />
                </div>
                <div className="input-group">
                    <input type="email" id="book-email" placeholder="Email" />
                </div>
                <div className="input-group">
                    <input type="text" id="book-phone" placeholder="Điện thoại" />
                </div>
                <div class="input-group">
                    <input type="number" min="0" id="adults" placeholder="Số lượng người lớn"/>
                </div>
                <div class="input-group">
                    <input type="number" min="0" id="adults" placeholder="Số lượng trẻ em"/>
                </div>
                <div className="input-group">
                    <small for="book-time">Giờ</small>
                    <input type="time" id="book-time" placeholder="Giờ"/>
                </div>
                <div className="input-group">
                    <input type="date" id="book-day" placeholder="Ngày khởi hành" />
                </div>
                <div className="input-group">
                    <textarea id="book-note" placeholder="Ghi chú" defaultValue={""} />
                </div>
                <div className="input-group">
                    <button type="button" className="thm-btn">Đặt bàn</button>
                </div>
            </form>
        </div>
    </div>
        
    )
}

export default RestaurantSidebar
