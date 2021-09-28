import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  Navbar,
  Sellings,
  Messages,
  Login,
  Logout,
  CreatePosts,
  CreateMessages,
  EditPosts,
  Register,
  Loading,
  FormSearch,
  DeletedPost,
} from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div id="App">
      <h1>Low Ball</h1>
      {/*<Header />*/}
      <Navbar isLoggedIn={isLoggedIn} />
      <Switch>
        <Route path="/login">
          <Login
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/register">
          <Register
            isLoggedIn={isLoggedIn}
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route path="/myposts">
          <Sellings isLoggedIn={isLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/createpost">
          <CreatePosts isLoggedIn={isLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/createmessage">
          <CreateMessages isLoggedIn={isLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/mymessages">
          <Messages isLoggedIn={isLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/logout">
          <Logout setIsLoggedIn={setIsLoggedIn} />
        </Route>
        {isLoading ? <Loading /> : null}
        <Route path="/editpost">
          <EditPosts isLoggedIn={isLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/" exact>
          <FormSearch isLoggedIn={isLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/deletedpost">
          <DeletedPost />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
