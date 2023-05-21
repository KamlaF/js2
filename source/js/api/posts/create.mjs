import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "post";

/**
 * Sends a POST request to the API to create a new post.
 *
 * @param {Object} postData - The data of the post to be created.
 * @returns {Promise<Object>} The data of the newly created post.
 * @throws Will throw an error if the fetch request fails.
 */
export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await authFetch(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors[0].message);
  }

  return json;
}
