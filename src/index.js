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
  const [currentPage, setCurrentPage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="App">
      
      <h1>Low Ball</h1>
      {/*<Header />*/}
      <Navbar isLoggedIn={isLoggedIn} 
              setCurrentPage={setCurrentPage}
              setIsLoggedIn={setIsLoggedIn}/>
      {currentPage === "Login" ? <Login setIsLoggedIn={setIsLoggedIn}
                                        setCurrentPage={setCurrentPage}/> : null}
      {currentPage === "Register" ? <Register setIsLoggedIn={setIsLoggedIn}/> : null}
      {currentPage === "Sellings" ? <Sellings isLoggedIn={isLoggedIn}/> : null }
      {currentPage === "Messages" ? <Messages isLoggedIn={isLoggedIn}/> : null }
      {currentPage === "Logout" ? <Logout isLoggedIn={isLoggedIn}/> : null }
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
