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
    const token = getToken()
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return data.posts;
  } catch (error) {
    throw error;
  }
}

export async function fetchUserMessages() {
  try {
    const token = getToken()
    console.log('token: ', token)
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    console.log('messages: ', data.data.messages)
    return data.data;
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
    return data.data;
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
    return data.data;
  } catch (error) {
    throw error;
  }
}
export async function deletePostNow(
  postID
) {
  try {
    const token = getToken();
    const { data } = await axios.delete(
      `${BASE}/posts/${postID}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
}
export async function addMessages(
  content
) {
  try {
    const token = getToken();
    const { data } = await axios.post(
      `${BASE}/posts`,
      {
        message: {
          content:content,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    return data.data;
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
