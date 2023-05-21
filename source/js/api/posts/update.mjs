import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "put";

/**
 * Updates a post with the given data.
 *
 * @param {Object} postData - The data to update the post with.
 * @param {string|number} postData.id - The ID of the post to update.
 * @throws Will throw an error if a post ID is not provided.
 * @returns {Promise<Object>} The updated post from the server.
 * @throws Will throw an error if the fetch request fails.
 */
export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }
  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors[0].message);
  }

  return json;
}
