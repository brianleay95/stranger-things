import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api";

const [posts, setPosts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

function postMatches(post, text) {
  if (post.description.includes(text)) {
    return true;
  }
  return false;
}

const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
const postsToDisplay = searchTerm.length ? filteredPosts : posts;

// then, in our jsx below... map over postsToDisplay instead of posts
