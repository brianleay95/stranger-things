import React, { useState, useEffect } from "react";
import axios from "axios";

const Sellings = () => {
  const [myPosts, setMyPosts] = useState([]);

  async function fetchMyPosts() {
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
      setMyPosts(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchMyPosts();
  }, []);

  return (
    <div className="sellings-main-container">
      <h1>My Posts/Selling</h1>
      {myPosts.length
        ? myPosts.map((post) => {
            return (
              <div key={post._id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Sellings;