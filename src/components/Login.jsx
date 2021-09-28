import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { loginUser } from "../api";
import {storeToken} from "../auth"

const Login = ({ setIsLoading, setIsLoggedIn, isLoggedIn}) => {
  if(isLoggedIn) 
    return (<div className="auth-component-main-container">You're logged in! Time to pitch some lowballs!</div>)
  
  const [userName, setUserName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [failed, setFailed]  = useState(false);

  return (
    <div className="auth-component-main-container">
      <form
        id="login"
        onSubmit={async (event) => {
          event.preventDefault();
          setIsLoading(true);

          try {
            const results = await loginUser(userName, password)
            if(results.success === true) {
              storeToken(results.data.token)
              setIsLoggedIn(true)
              setFailed(false)
            }
            else {//error message + clear text fields
              console.log("login error: ", results.error.message)
            }
            
            setUserName('')
            setPassword('')

          } catch (err) {
            console.log(err);
            setFailed(true)
            setUserName("")
            setPassword("")
          } finally {
            setIsLoading(false);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            placeholder="enter username"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </fieldset>

        <fieldset className="auth-component-input">
          <label htmlFor="password">User Password</label>
          <input
            id="password"
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </fieldset>
        {failed ? <div className="auth-component-main-container">Login failed. Username or password incorrect</div> : null }
        <button>Login</button> 
      </form>
      <NavLink to="/register"> 
          Don't have an account? Click here. 
      </NavLink>
    </div>
  );
};

export default Login;