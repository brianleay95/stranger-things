import axios from "axios";
import { getToken } from "../auth";

const BASE = "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT";

// this is an example for an api call with axios

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      user: {
        username: username,
        password: password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchUserPosts() {
  try {
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "auth-token": getToken(),
      },
    });
    return data.posts;
  } catch (error) {
    throw error;
  }
}

export async function fetchUserMessages(aToken) {
  try {
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "auth-token": getToken(),
      },
    });
    return data.messages;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      user: {
        username: username,
        password: password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}
export async function addPosts(
  title,
  description,
  price,
  location,
  willDeliver
) {
  try {
    const token = getToken();
    const { data } = await axios.post(
      `${BASE}/posts`,
      {
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchAllPosts() {
  try {
    const response = await axios.get(`${BASE}/posts`);
    const data = response.data;
    return data.data;
  } catch (err) {
    console.log(err);
  }
}
