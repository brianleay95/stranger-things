import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { registerUser } from "../api";
import { storeToken } from "../auth";

const Register = ({ setIsLoading, isLoggedIn, setIsLoggedIn}) => {
  if(isLoggedIn) 
    return (<div className="sellings-main-container">You're stilled logged in!  Log out before registering as a different user.</div>)

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-component-main-container">
      <form
        id="register"
        onSubmit={async (event) => {
          event.preventDefault();
          setIsLoading(true);

          try {
            const results = await registerUser(userName, password);
            if(results.success === true) {
              storeToken(results.data.token);
              setIsLoggedIn(true);
            }
            else  
              console.log('register failed: ', results.error.message)
            setUserName("");
            setPassword("");
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
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </fieldset>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;