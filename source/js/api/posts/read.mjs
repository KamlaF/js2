

import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";


export async function getPosts() {

  const updatePostURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(updatePostURL);

  const updatePosts = await response.json();

  console.log(updatePosts);
  
  return updatePosts;
}

export async function getPost(id) {
      if (!id) {
        throw new Error("Get requires a postID");
      }
  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(getPostURL);

  const updatePost = await response.json();

  console.log(updatePost);
  
}



