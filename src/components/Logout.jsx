import { clearCurrentUser } from "../auth";
import React from "react";


const Logout = ( { setIsLoggedIn } ) => {
    clearCurrentUser();
    setIsLoggedIn(false);
    return (
        <div className="logout-confirmation">
            <h1>You've logged out!</h1> 
        </div>
  );
};

export default Logout;