import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { fetchingAllThePosts } from "./Posts";

console.log(fetchingAllThePosts())

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {Header, Navbar, Logout} from "./components";

const App = () => {

  const [loginCred, setLoginCred] = useState(null);

  return (
    <div id="App">
      <h1>Hello, World</h1>
      <Header />
      <Navbar setLoginCred = {setLoginCred}/>
      
      <Logout />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)