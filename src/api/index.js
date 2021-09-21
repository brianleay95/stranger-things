import axios from "axios";

const BASE = "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT";

// this is an example for an api call with axios

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/user/login`, {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserPosts(token) {
  try {
    const { data } = await axios.get(`${BASE}/user/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }});
      return data.posts;
  } catch (error) {
    throw error;
  }
}

export async function getUserMessages(token) {
  try {
    const { data } = await axios.get(`${BASE}/user/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }});
      return data.messages;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/user/register`, {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchAllPosts() {
  try {
    const response = await axios.get(`${BASE}/posts`);
    const data = response.data
    return data.data;
  } catch (err) {
    console.log(err);
  }
}
