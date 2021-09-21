import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Posts, Navbar, Sellings, Messages, Login, Logout } from "./components";

const App = () => {
  const [loginCred, setLoginCred] = useState(null);
  const [currentPage, setCurrentPage] = useState('');

  return (
    <div id="App">
      
      <h1>Low Ball</h1>
      {/*<Header />*/}
      <Navbar setLoginCred={setLoginCred}
              loginCred={loginCred} 
              setCurrentPage={setCurrentPage}/>
      {currentPage === "Login" ? <Login /> : null}
      {currentPage === "Register" ? <Register /> : null}
      {currentPage === "Sellings" ? <Sellings loginCred={loginCred}/> : null }
      {currentPage === "Messages" ? <Messages loginCred={loginCred}/> : null }
      {currentPage === "Logout" ? <Logout logicCred={loginCred}/> : null }
      {currentPage === "Posts" ? <Posts /> : null }
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
