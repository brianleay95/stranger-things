import React, { useState, useEffect } from "react";
import  {fetchUserPosts} from "../api"
import axios from "axios";

const Sellings = (isLoggedIn) => {
  if(!isLoggedIn) 
    return (<div className="sellings-main-container">Not available, please log in to view your posts!</div>)

  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    setUserPosts(fetchUserPosts());
  }, []);

  
  return (
    <div className="sellings-main-container">
      <h1>My Posts/Selling</h1>
      {userPosts.length
        ? userPosts.map((post) => {
            return (
              <div key={post._id} className="sellings-card">
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