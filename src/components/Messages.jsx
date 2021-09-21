import React, { useState, useEffect } from "react";
import axios from "axios";

const Messages = () => {
  const [myMessages, setMyMessages] = useState([]);

  async function fetchMyMessages() {
    try {
      const response = await axios.get(
        "http://clever-neumann-583.herokuapp.com/posts",
        {
          headers: {
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNmYmM2Y2M3ODUwYTAwMDQ2MDljN2QiLCJpYXQiOjE2MzE1NjcwMzF9.ZPCDJv1rpQV7l--K7vrR_PNNqLppgHjGL9fjIKqnCkI",
          },
        }
      );
      setMyMessages(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchMyMessages();
  }, []);

  return (
    <div className="messages-main-container">
      
    </div>
  );
};

export default Messages;