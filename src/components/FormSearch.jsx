import React, { useState, useEffect } from "react";
import { fetchAllPosts, deletePostNow, fetchAllPostsByUser } from "../api";
import { NavLink } from 'react-router-dom'

const FormSearch = ({ isLoggedIn, setIsLoading }) => {

  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(async () => {
    let data;
    try {
      if(isLoggedIn) {
        data = await fetchAllPostsByUser();
      }
      else {
        data = await fetchAllPosts();
      }
      setPosts(data.posts);
    }catch (err) {
      console.log(err);
    } 
  }, []);

  function postMatches(post, text) {
    if (post.description.includes(text)) {
      return true;
    }
    return false;
  }

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <div className="post-main-container">
      <h2>All Posts</h2>

      <div className="">
            <form 
                id="searchBar"
                onSubmit={async (event)=>{
                    event.preventDefault();
                    try {
                    }catch (err) {
                        console.log(err);}
                }}
                >
                <fieldset className="">
                    <label htmlFor="Title">Search</label>
                    <input type="text"
                            id="Content"
                            placeholder="Search.."
                            value={searchTerm} 
                            onChange={(event) => {
                              setSearchTerm(event.target.value);
                            }}/>
                </fieldset>
            </form>
        </div>

      {postsToDisplay.length
        ? postsToDisplay.map((post) => {
            return post.active ? 
              <div className="all-cards">
                <div key={post._id} className="post-card">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p>{post.price}</p>

                  {post.isAuthor ? <NavLink to="/deletedpost">
                    <button
                      id="deletePost"
                      onClick={async (event) => {
                        event.preventDefault();
                        setIsLoading(true)
                        try {
                          const results = await deletePostNow(post._id);
                        } catch (err) {
                          console.log(err);
                        }finally {
                          setIsLoading(false);
                        }
                      }}>
                      Delete Post
                    </button>
                  </NavLink> : null}

                  {post.isAuthor ? <NavLink to="/editpost">
                    <button
                      id="editPost"
                      onClick={async (event) => {
                        event.preventDefault();
                      }}>
                      Edit Post
                    </button>
                    </NavLink>: null}
                  {( !isLoggedIn || !post.isAuthor) ? <NavLink to={{
                      pathname: "/editpost",
                      state : { post: post }
                    }}>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                      }}>
                      {" "}
                      Message about item {" "}
                    </button>
                  </NavLink> 
                  : <div> This is your post </div> }

                </div>
              </div>
            : null;
          })
        : <div>No listings yet</div>}
    </div>
  );
};

export default FormSearch;

