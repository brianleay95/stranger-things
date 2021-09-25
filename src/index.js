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
} from "./components";

const App = () => {
  const [currentPage, setCurrentPage] = useState({name: "", properties: null});
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
      {currentPage.name === "Login" ? (
        <Login
          setIsLoggedIn={setIsLoggedIn}
          setCurrentPage={setCurrentPage}
          isLoggedIn={isLoggedIn}
          setIsLoading={setIsLoading}
        />
      ) : null}
      {currentPage.name === "Register" ? (
        <Register
          isLoggedIn={isLoggedIn}
          setIsLoading={setIsLoading}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : null}
      {currentPage.name === "Sellings" ? (
        <Sellings 
          isLoggedIn={isLoggedIn} 
          setIsLoading={setIsLoading} />
      ) : null}
      {currentPage.name === "Create Posts" ? (
        <CreatePosts 
          isLoggedIn={isLoggedIn} 
          setIsLoading={setIsLoading} />
      ) : null}
      {currentPage.name === "Create Messages" ? (
        <CreateMessages postID = {currentPage.properties}
          isLoggedIn={isLoggedIn} 
          setIsLoading={setIsLoading} />
      ) : null}
      {currentPage.name === "Messages" ? (
        <Messages  
          isLoggedIn={isLoggedIn} 
          setIsLoading={setIsLoading} />
      ) : null}
      {currentPage.name === "Logout" ? 
        <Logout isLoggedIn={isLoggedIn} /> 
        : null}
      {isLoading ? 
        <Loading /> 
        : null}
      {currentPage.name === "Posts" ? 
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
