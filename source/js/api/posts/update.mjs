import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "PUT";

/**
 * Updates a post with the provided data.
 *
 * @param {Object} postData - The data of the post to be updated.
 * @throws {Error} Will throw an error if the update request fails or if the postData does not have an id.
 */
export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  try {
    const response = await authFetch(updatePostURL, {
      method,
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      const json = await response.json();
      throw new Error(json.errors[0].message);
    }

    const update = await response.json();
    console.log(update);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
