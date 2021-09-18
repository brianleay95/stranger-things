import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Posts from "./Posts";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {Header, Navbar} from "./components";

const App = () => {
  return (
    <div id="App">
      <h1>Low Ball</h1>
      <Header />
      <Navbar />
      <Posts />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)