import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(async () => {
    const data = await fetchAllPosts();
    setAllPosts(data.posts);
    console.log(data)
  }, []);

  return (
    <div className="posts-main-container">
      <h1>All Posts</h1>
      {allPosts.length
        ? allPosts.map((post) => {
            return (
              <div className="all-cards">
                <div key={post._id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>{post.price}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Posts;
