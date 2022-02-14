import React from 'react'

function SiteFooterRight() {
    return (
        


        <div className="col-md-4">
        <h3 className="footer-widget__title">Gallery</h3>
        <ul className="footer-widget__gallery-list list-unstyled">
          <li><a href="/vi/place/details/can-cu-tien-dong-5" title="Căn cứ Tiên Động">
              <div style={{width: '76px', height: '76px', backgroundImage: 'url(/DataFiles/2021/06/Files/20210605-173127-84IPnqC4_thumb.jpeg)'}} className="bg-img" />
            </a></li>
          <li><a href="/vi/place/details/den-tam-giang-12" title="Đền Tam Giang">
              <div style={{width: '76px', height: '76px', backgroundImage: 'url(/DataFiles/2021/06/Files/20210606-141835-EaGWTws9_thumb.jpeg)'}} className="bg-img" />
            </a></li>
          <li><a href="/vi/place/details/thac-van-mo-18" title="Thác Vạn Mơ">
              <div style={{width: '76px', height: '76px', backgroundImage: 'url(/DataFiles/2021/06/Files/20210605-165650-uIoo9i3g_thumb.jpeg)'}} className="bg-img" />
            </a></li>
          <li><a href="/vi/place/details/dinh-huong-tram-3" title="Đình Hương Trầm">
              <div style={{width: '76px', height: '76px', backgroundImage: 'url(/DataFiles/2021/06/Files/20210605-172826-2EHyCA9G_thumb.png)'}} className="bg-img" />
            </a></li>
          <li><a href="/vi/place/details/vuon-quoc-gia-xuan-son-16" title="Vườn quốc gia Xuân Sơn">
              <div style={{width: '76px', height: '76px', backgroundImage: 'url(/DataFiles/2021/06/Files/20210605-170453-AZAGsuom_thumb.jpeg)'}} className="bg-img" />
            </a></li>
          <li><a href="/vi/place/details/den-hung-1" title="Đền Hùng">
              <div style={{width: '76px', height: '76px', backgroundImage: 'url(/DataFiles/2021/06/Files/20210605-172201-MMczG9Oq_thumb.jpeg)'}} className="bg-img" />
            </a></li>
        </ul>
        <div className="visitors"><span className="stats"><i className="fa fa-users" /> Total: <span className="number">6365</span></span><span className="stats"><i className="fa fa-user" /> Onlines:
            <span className="number" id="onlines">1</span></span></div>
      </div>
    )
}

export default SiteFooterRight
