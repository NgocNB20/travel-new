import React, { useState } from "react";
import { Link } from "react-router-dom";

function TopHeader() {
  const [isLogin, setIsLogin] = useState(false);

     const [user, setUser] = useState({"email":"","password":""});
    const setParams =(event) => {
        setUser({...user,[event.target.name]:event.target.value});
    }

    const login = () =>{
        var axios = require('axios');
        var data = JSON.stringify({
          "email": user.email,
          "password": user.password
        });
        
        var config = {
          method: 'post',
          url: 'http://localhost:8080/api/login',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(response.data);
          localStorage.setItem("accessToken",response.data);
          setIsLogin(true);
          showLogin();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  const showLogin = ()=>{
    window.location.reload(true);}

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
          <Link to="/search" className="main-nav__search search-popup__toggler">
            <i className="fal fa-search" />
          </Link>
          
           {!isLogin? (<span  className="main-nav__login login-popup__toggler login" data-toggle="modal" data-target="#exampleModal" >
            <i className="fal fa-user" />
          </span>):(<div>Helllo user</div>)}
          
         
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
              <form>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>
        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="form2Example34" defaultChecked />
              <label className="form-check-label" htmlFor="form2Example34"> Remember me </label>
            </div>
          </div>
          <div className="col">
            {/* Simple link */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        {/* Submit button */}
        <button type="button" className="btn btn-primary btn-block mb-4 btn-login" onClick={login}>Sign in</button>
        {/* Register buttons */}
        <div className="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-facebook-f" />
          </button>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-google" />
          </button>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-twitter" />
          </button>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-github" />
          </button>
        </div>
      </form>
              </div>
               
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
     
  );
}

export default TopHeader;
