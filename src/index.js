import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Posts, Navbar, Sellings, Messages, Logout } from "./components";

const App = () => {
  const [loginCred, setLoginCred] = useState(null);

  return (
    <div id="App">
      
      <h1>Low Ball</h1>
      {/*<Header />*/}
      <Sellings loginCred={loginCred}/>
      <Messages loginCred={loginCred}/>
      <Navbar setLoginCred={setLoginCred}
              loginCred={loginCred} />
      <Logout logicCred={loginCred}/>

      <Posts />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
