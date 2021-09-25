import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  Posts,
  Navbar,
  Sellings,
  Messages,
  Login,
  Logout,
  CreatePosts,
  Register,
  Loading,
  CreateMessages,
} from "./components";

const App = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div id="App">
      <h1>Low Ball</h1>
      {/*<Header />*/}
      <Navbar
        isLoggedIn={isLoggedIn}
        setCurrentPage={setCurrentPage}
        setIsLoggedIn={setIsLoggedIn}
      />
      {currentPage === "Login" ? (
        <Login
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
          isLoggedIn={isLoggedIn}
          setIsLoading={setIsLoading}
        />
      ) : null}
      {currentPage === "Register" ? (
        <Register
          isLoggedIn={isLoggedIn}
          setIsLoading={setIsLoading}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : null}
      {currentPage === "Sellings" ? (
        <Sellings 
          isLoggedIn={isLoggedIn} 
          setIsLoading={setIsLoading} />
      ) : null}
      {currentPage === "Create Posts" ? (
        <CreatePosts 
          isLoggedIn={isLoggedIn} 
          setIsLoading={setIsLoading} />
      ) : null}
      {currentPage === "Create Messages" ? (
        <CreateMessages 
          isLoggedIn={isLoggedIn} 
          setIsLoading={setIsLoading} />
      ) : null}
      {currentPage === "Messages" ? (
        <Messages  
          isLoggedIn={isLoggedIn} 
          setIsLoading={setIsLoading} />
      ) : null}
      {currentPage === "Logout" ? 
        <Logout isLoggedIn={isLoggedIn} /> 
        : null}
      {isLoading ? 
        <Loading /> 
        : null}
      {currentPage === "Posts" ? 
        <Posts 
          setCurrentPage={setCurrentPage}
          isLoading={isLoading} /> : null}
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
