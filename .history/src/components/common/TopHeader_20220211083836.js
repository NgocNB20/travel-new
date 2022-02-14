import React from "react";
import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <div className="topbar-one">
      <div className="container-fluid">
        <div className="topbar-one__left">
          <a href="mailto:Email: sovhttdl@phutho.gov.vn">
            Email: sovhttdl@phutho.gov.vn
          </a>
          <a href="tel:Tel: 0210.3846.390">Tel: 0210.3846.390</a>
        </div>
        <div className="topbar-one__right" />
        <div className="main-nav__right">
          <div className="dropdown bootstrap-select">
            <select name="languages" id="languages" className="selectpicker">
              <option value="/vi">Tiếng Việt</option>
              <option value="/en">English</option>
            </select>
            <div className="dropdown-menu ">
              <div className="inner show" role="listbox" aria-expanded="false">
                  <ul className="dropdown-menu inner show" />
              </div>
            </div>
          </div>
          <Link to="/vi/search" className="main-nav__search search-popup__toggler">
            <i className="fal fa-search" />
            <div>
        {/* Button trigger modal */}
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
          Launch demo modal
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
          </Link>
          <Link to="/vi/login" className="main-nav__login login-popup__toggler">
            <i className="fal fa-user" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
