import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";

const path = "/posts";

/**
 * Fetches all posts from the API.
 *
 * @returns {Promise<Object>} The posts from the server.
 * @throws Will throw an error if the fetch request fails.
 */
export async function getPosts() {
  const updatePostURL = `${API_SOCIAL_URL}${path}`;
  const response = await authFetch(updatePostURL);
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json.errors[0].messages);
}

/**
 * Fetches all posts by a particular user from the API.
 *
 * @param {string} name - The name of the user.
 * @returns {Promise<Object>} The posts from the server.
 * @throws Will throw an error if the fetch request fails.
 */
export async function getUserPosts(name) {
  const updatePostURL = `${API_SOCIAL_URL}/profiles/${name}${path}`;
  const response = await authFetch(updatePostURL);

  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json.errors[0].messages);
}

/**
 * Fetches a post by its id from the API.
 *
 * @param {string|number} id - The id of the post.
 * @returns {Promise<Object>} The post from the server.
 * @throws Will throw an error if the fetch request fails or if an id is not provided.
 */
export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }
  const getPostURL = `${API_SOCIAL_URL}${path}/${id}`;
  const response = await authFetch(getPostURL);
  const updatePost = await response.json();

  console.log(updatePost);
}

/**
 * Fetches posts with a particular tag from the API.
 *
 * @param {string} tag - The tag to search posts by.
 * @returns {Promise<Object>} The posts from the server.
 * @throws Will throw an error if the fetch request fails or if a tag is not provided.
 */
export async function searchPosts(tag) {
  if (!tag.trim()) {
    throw new Error("Search requires a tag value");
  }
  const url = `${API_SOCIAL_URL}${path}?_tag=${tag}`;
  const response = await fetch(url);
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json.errors[0].messages);
}
