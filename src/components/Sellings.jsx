import React, { useState, useEffect } from "react";
import  {fetchUserPosts, deletePostNow} from "../api"
import { NavLink } from "react-router-dom"

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
                <NavLink to="/deletedpost">
                  <button
                      id="deletePost"
                      onClick={async (event) => {
                        event.preventDefault();
                        setIsLoading(true)
                        try {
                          const results = await deletePostNow(post._id);
                        } catch (err) {
                          console.log(err);
                        } finally {
                          setIsLoading(false);
                        }
                      }}
                    >
                      Delete Post
                  </button>
                </NavLink>  
                <NavLink to={{
                  pathname: "/editpost",
                  state : { post: post }
                }}>  
                  <button id='editPost'>
                      {" "}
                      Edit post{" "}
                  </button>
                </NavLink> 
              </div>
            : null;
          })
        : null}
    </div>
  );
};

export default Sellings;