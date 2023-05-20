import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";
import { renderPosts } from "/source/js/templates/posts/renderPosts.mjs";
import { filterPosts } from "/source/js/helpers/posts/filter.mjs";
import {
  setSearchListener 
} from "/source/js/handlers/posts/searchListener.mjs";

const path = "/posts";

export async function getPosts() {
  const updatePostURL = `${API_SOCIAL_URL}${path}`;
  const response = await authFetch(updatePostURL);
  const updatePosts = await response.json();

  console.log(updatePosts);
  renderPosts(updatePosts);
  setSearchListener(updatePosts);
  return updatePosts;
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
