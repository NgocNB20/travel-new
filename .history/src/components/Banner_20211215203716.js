import React from 'react'

export default function Banner() {
    return (
        <section className="page-header jquery-ripples" style={{backgroundImage: 'none'}}>
            <div className="container">
                <h2>Tin tức, sự kiện</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="/vi">Trang chủ</a>
                        </li><li><span>Tin tức, sự kiện</span></li>
                    </ul>
            </div>
            <canvas width={1526} height={306} style={{position: 'absolute', inset: '0px', zIndex: -1}} />
        </section>
    )
}
