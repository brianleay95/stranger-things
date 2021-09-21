import React, { useState, useEffect } from "react";
import axios from "axios";
import {fetchUserMessages} from "../api"

const Messages = (loginCred) => {
  const [myMessages, setMyMessages] = useState([]);

  useEffect(() => {
    setMyMessages(fetchUserMessages(loginCred));
  }, []);

  return (
    <div key={myMessages._id} className="messages-main-container">
      <h1>My Messages</h1>
      {myMessages.length
        ? myMessages.map((message) => {
            return (
              <div key={message._id} className="messages-card">
                <h3>{myMessages.fromUser}</h3>
                <p>{myMessages.post.title}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Messages;