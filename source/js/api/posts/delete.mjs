import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "delete";

/**
 * Sends a DELETE request to the API to remove a post.
 *
 * @param {number|string} id - The id of the post to be deleted.
 * @returns {Promise<Object>} The response from the server.
 * @throws Will throw an error if the fetch request fails or if an id is not provided.
 */
export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires a postID");
  }
  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(updatePostURL, {
    method,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors[0].message);
  }

  return json;
}
