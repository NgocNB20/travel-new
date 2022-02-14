import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
 
function Login() {

     const [user, setUser] = useState({"email":"","password":""});
    const setParams =(event) => {
        setUser({...user,[event.target.name]:event.target.value});
    }

    const login = () =>{
        var axios = require('axios');
        var data = JSON.stringify({
          "email": "ngocmeu2000@gmail.com",
          "password": "abcd1234"
        });
        
        var config = {
          method: 'post',
          url: 'http://localhost:8080/api/login',
          headers: { 
            'Cookie': 'JSESSIONID=59D2BE4CCE71F054536852182F625840', 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    useEffect( ()=>{
            console.log(user);
    },[user])

    return (
        
        <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" >
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">Username:</label><br />
                    <input type="text" name="email" id="username" className="form-control" onChange={setParams} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">Password:</label><br />
                    <input type="text" name="password" id="password" className="form-control" onChange={setParams} />
                  </div>
                  <div className="form-group text-right" >
                    <label htmlFor="remember-me" className="text-info"><span>Remember me</span>&nbsp;<span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                    <input type="button" name="submit" className="btn btn-info btn-md" defaultValue="submit" onClick={login} />
                  </div>
                  <div id="register-link" className="text-right">
                    <Link to="/vi/register" className="text-info">Register here</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login
