import React from 'react'
import { Link } from 'react-router-dom'

function TopHeader() {
    return (
        <div className="topbar-one">
        <div className="container-fluid">
          <div className="topbar-one__left">
            <a href="mailto:Email: sovhttdl@phutho.gov.vn">Email: sovhttdl@phutho.gov.vn</a>
            <a href="tel:Tel: 0210.3846.390">Tel: 0210.3846.390</a>
          </div>
          <div className="topbar-one__right" />
          <div className="main-nav__right">
            <div className="dropdown bootstrap-select">
              <select name="languages" id="languages" className="selectpicker">
                <option value="/vi">Tiếng Việt</option>
                <option value="/en">English</option>
              </select>
              <div className="dropdown-menu " >
                <div className="inner show" role="listbox" aria-expanded="false">
                  <ul className="dropdown-menu inner show" />
                </div>
              </div>
            </div>
            <Link to="#" className="main-nav__search search-popup__toggler"><i className="fal fa-search" /></Link>
            <Link to="#" className="main-nav__login login-popup__toggler"><i className="fal fa-user" /></Link>
          </div>
        </div>
      </div>
    )
}

export default TopHeader
