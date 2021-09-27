import React, { useState, useEffect } from "react";
import  {fetchUserPosts, deletePostNow} from "../api"

const Sellings = ({isLoggedIn, setIsLoading, setCurrentPage}) => {
  if(!isLoggedIn) 
    return (<div className="sellings-main-container">Not available, please log in to view your posts!</div>)

  const [userPosts, setUserPosts] = useState([])

  useEffect(async () => {
    setIsLoading(true)
    try{
      const data = await fetchUserPosts();
      setUserPosts(data.posts);
    }catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  return (
    <div key={userPosts._id} className="sellings-main-container">
      <h1>My Posts/Sellings</h1>
      {userPosts.length
        ? userPosts.map((post) => {
            return post.active ?
              <div key={post._id} className="sellings-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>{post.price}</p>
                <button
                    id="deletePost"
                    onClick={async (event) => {
                      event.preventDefault();
                      setIsLoading(true)
                      try {
                        const results = await deletePostNow(post._id);
                        const data = await fetchUserPosts();
                        post.delete()
                      } catch (err) {
                        console.log(err);
                      } finally {
                        setIsLoading(false);
                      }
                    }}
                  >
                    Delete Post
                </button>
                <button id='editPost'
                  onClick={(event) => {
                      event.preventDefault();
                      setCurrentPage({name: "Edit Posts", properties: post});
                    }}
                  >
                    {" "}
                    Edit post{" "}
                </button>
              </div>
            : null;
          })
        : null}
    </div>
  );
};

export default Sellings;