import React, { useState, useEffect } from "react";
import axios from "axios";

const Logout = () => {
    
    return (
        <div className="logout-confirmation">
            { loginCred === null
                ? <h1>You've logged out!</h1>
                : null}
        </div>
  );
};

export default Logout;