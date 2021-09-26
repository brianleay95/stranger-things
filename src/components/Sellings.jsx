import React, { useState, useEffect } from "react";
import  {fetchUserPosts} from "../api"
import axios from "axios";

const Sellings = ({isLoggedIn, setIsLoading, setCurrentPage}) => {
  if(!isLoggedIn) 
    return (<div className="sellings-main-container">Not available, please log in to view your posts!</div>)

  const [userPosts, setUserPosts] = useState([])

  useEffect(async () => {
    const data = await fetchUserPosts();
    setUserPosts(data.posts);
  }, []);

  console.log('userPosts: ',userPosts)
  
  return (
    <div key={userPosts._id} className="sellings-main-container">
      <h1>My Posts/Sellings</h1>
      {userPosts.length
        ? userPosts.map((post) => {
            return (
              <div key={post._id} className="sellings-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>{post.price}</p>
                {post.isAuthor ? <a
                    onClick={(event) => {
                        event.preventDefault();
                        setCurrentPage({name: "Edit Post", properties: post});
                      }}
                    >
                      {" "}
                      Edit this post{" "}
                    </a> : null }
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Sellings;