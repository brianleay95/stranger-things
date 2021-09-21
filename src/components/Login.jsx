import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { loginUser } from "../api";
import {storeToken} from "../auth"

const Login = ({ setIsLoading, setIsLoggedIn, setCurrentPage}) => {
  if(isLoggedIn) 
    return (<div className="auth-component-main-container">You're already logged in!  Log out before logging in as a different user.</div>)

  const [userName, setUserName] = useState(""); //remember to set default to ''
  const [password, setPassword] = useState(""); //remember to set default to ''


  //need to add register button and link to register page
  return (
    <div className="auth-component-main-container">
      <form
        id="login"
        onSubmit={async (event) => {
          event.preventDefault();
          setIsLoading(true);

          try {
            const results = await loginUser(userName, password)
            storeToken(results.data.token)
            setIsLoggedIn(true)
            
            setUserName('')
            setPassword('')

          } catch (err) {
            console.log(err);
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
            type="text"
            placeholder="enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </fieldset>
        <button>Login</button> 
      </form>
    </div>
  );
};

export default Login;