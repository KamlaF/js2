import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../posts/authFetch.mjs";

const action = "/profiles";
const method = "put";

/**
 * Updates the profile data on the server.
 *
 * @param {Object} profileData - An object that contains the updated profile data.
 * @throws Will throw an error if a name is not provided in the profileData object.
 * @returns {Promise<Object>} A promise that resolves with the updated profile data.
 * @throws Will throw an error if the fetch request fails.
 */
export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });

  const update = await response.json();

  console.log(update);
}
