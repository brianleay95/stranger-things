import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  return (
    <div className="navbar">
      <NavLink to="/">Posts</NavLink>
      {isLoggedIn ? <NavLink to="/mymessages"> Messages</NavLink> : null}
      {isLoggedIn ? <NavLink to="/myposts"> Sellings</NavLink> : null}
      {isLoggedIn ? <NavLink to="/createpost"> CreatePosts</NavLink> : null}
      {isLoggedIn ? (
        <NavLink to="/logout">
          Logout
        </NavLink>
      ) : (
        <NavLink to="/login"> Login/Register</NavLink>
      )}
    </div>
  );
};

export default Navbar;
