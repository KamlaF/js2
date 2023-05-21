import { API_SOCIAL_URL } from "../constants.mjs";

/**
 * The API action for login.
 * @type {string}
 */
const action = "/auth/login";

/**
 * The HTTP method to use for login.
 * @type {string}
 */
const method = "post";

/**
 * Makes a request to the login endpoint with the provided profile.
 * If the response is successful, returns the response as JSON.
 * If the response is not successful, throws an error with the response message.
 *
 * @param {Object} profile The user profile to log in with.
 * @param {string} profile.username The username of the user.
 * @param {string} profile.password The password of the user.
 * @returns {Promise<Object>} The response from the server, as a JSON object.
 * @throws {Error} If the response is not ok.
 */
export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors[0].message);
  }

  return json;
}
