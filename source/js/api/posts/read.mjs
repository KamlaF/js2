import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";


const path = "/posts";

export async function getPosts() {
  const updatePostURL = `${API_SOCIAL_URL}${path}`;
  const response = await authFetch(updatePostURL);
  

  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json.errors[0].messages);
  
}

export async function getUserPosts(name) {
  
    const updatePostURL = `${API_SOCIAL_URL}/profiles/${name}${path}`;
  const response = await authFetch(updatePostURL);

  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json.errors[0].messages);
}

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }
  const getPostURL = `${API_SOCIAL_URL}${path}/${id}`;
  const response = await authFetch(getPostURL);
  const updatePost = await response.json();

  console.log(updatePost);
}

export async function searchPosts(tag) {
  if (!tag.trim()) {
    throw new Error("Search requires a atg value");
  }
  const url = `${API_SOCIAL_URL}${path}?_tag=${tag}`;
  const response = await fetch(url);
  const json = await response.json();
  if (response.ok) {
    return json
  }
  throw new Error(json.errors[0].messages);
  
}
