import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchUserMessages } from "../api";

const Messages = ({isLoggedIn, setIsLoading}) => {
  if (!isLoggedIn)
    return (
      <div className="messages-main-container">
        Not available, please log in to view your messages!
      </div>
    );

  const [myMessages, setMyMessages] = useState([]);

  useEffect(() => {
    setMyMessages(fetchUserMessages());
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
