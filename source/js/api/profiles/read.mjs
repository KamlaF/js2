import { load } from "../../storage/index.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../posts/authFetch.mjs";

const action = "/Profiles";

/**
 * Fetches all profiles from the server.
 *
 * @returns {Promise<Array>} A promise that resolves with an array of profiles.
 * @throws Will throw an error if the fetch request fails.
 */
export async function getProfiles() {
  const updateProfileURL = `${API_SOCIAL_URL}${action}`;
  const response = await authFetch(updateProfileURL);
  const updateProfiles = await response.json();

  console.log(updateProfiles);

  return updateProfiles;
}

/**
 * Fetches a specific profile based on the provided name.
 *
 * @param {string} name - The name of the profile to fetch.
 * @throws Will throw an error if a name is not provided.
 * @returns {Promise<Object>} A promise that resolves with the profile data.
 * @throws Will throw an error if the fetch request fails.
 */
export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a name");
  }

  const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;
  const response = await authFetch(getProfileURL);
  const updateProfile = await response.json();

  console.log(updateProfile);
}
