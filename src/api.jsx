const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = () =>
  fetch(`${BASE_URL}/users`).then(res => res.json());

export const getPosts = () =>
  fetch(`${BASE_URL}/posts`).then(res => res.json());

export const createPost = (data) =>
  fetch(`${BASE_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json());


export const updatePost = async (id, data) => {
  try {
    await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    
    return { id, ...data };

  } catch (error) {
    console.error("Update failed:", error);
    return { id, ...data }; 
  }
};



export const deletePost = (id) =>
  fetch(`${BASE_URL}/posts/${id}`, { method: "DELETE" });

export const getComments = (postId) =>
  
  fetch(`${BASE_URL}/posts/${postId}/comments`).then(res => res.json());

export const addComment = (data) =>
  fetch(`${BASE_URL}/comments`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }

  }).then(res => res.json());
