import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { loginUser } from "../api";
import {storeToken, getToken} from "../auth"

const Login = ({ setIsLoading, setIsLoggedIn, setCurrentPage, isLoggedIn}) => {
  if(isLoggedIn) 
    return (<div className="auth-component-main-container">You're logged in! Time to pitch some lowballs!</div>)

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
            if(results.success === true) {
              storeToken(results.data.token)
              setIsLoggedIn(true)
            }
            else //error message + clear text fields
              console.log("login error: ", results.error.message)
            
            
            setUserName('')
            setPassword('')

          } catch (err) {
            console.log(err);
          } finally {
            setIsLoading(false);
            console.log("token: ", getToken())
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
        <button>Login</button> 
      </form>
      <a onClick={(event) => {
                event.preventDefault()
                setCurrentPage("Register")}}> Don't have an account? Click here. </a>
    </div>
  );
};

export default Login;