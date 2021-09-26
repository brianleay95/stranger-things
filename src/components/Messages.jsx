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

  useEffect(async () => {
    const data = await fetchUserMessages();
    setMyMessages(data.messages);
    console.log('fromMessages.jsx USERID: ', data._id)
  }, []);

  return (
    <div key={myMessages._id} className="messages-main-container">
      <h1>My Messages</h1>
      {myMessages.length
        ? myMessages.map((message) => {
            return (
              <div key={message._id} className="messages-card">
                <h3>From: {message.fromUser.username}</h3>
                <p>Post: {message.post.title}</p>
                <p>Message: {message.content}</p>
              </div>
            );
          })
        : <div>No messages</div>}
    </div>
  );
};

export default Messages;
