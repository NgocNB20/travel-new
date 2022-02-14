import React from 'react';
import { Link } from 'react-router-dom';

function SiteFooterRight() {
  
  return (

    <div className="col-md-4">
      <h3 className="footer-widget__title">Gallery</h3>
      <ul className="footer-widget__gallery-list list-unstyled">
        <li>
          <Link to="/vi/places/detail/1" title="Căn cứ Tiên Động">
            <div style={{ width: '76px', height: '76px', backgroundImage: 'url(/DataFiles/2021/06/Files/20210605-173127-84IPnqC4_thumb.jpeg)' }} className="bg-img" />
          </Link>
        </li>
      </ul>
      <div className="visitors"><span className="stats">
        <i className="fa fa-users" /> Total: 
          <span className="number">6365</span></span>
          <span className="stats">
            <i className="fa fa-user" /> Onlines:
            <span className="number" id="onlines">1</span>
          </span>
      </div>
    </div>

  )
}

export default SiteFooterRight
