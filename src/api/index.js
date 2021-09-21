import axios from "axios";

const BASE = "http://clever-neumann-583.herokuapp.com";

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

export async function fetchUserPosts(token) {
  try {
    const { data } = await axios.get(`${BASE}/user/me`, {
      headers: {
        "auth-token":
          {token},
      },
    });
    return data.posts;
  } catch (error) {
    throw error;
  }
}

export async function fetchUserMessages(token) {
  try {
    const { data } = await axios.get(`${BASE}/user/me`, {
      headers: {
        "auth-token":
          {token},
      },
    });
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