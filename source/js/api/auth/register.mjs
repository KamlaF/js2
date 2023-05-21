import { API_SOCIAL_URL } from "../constants.mjs";

/**
 * The API action for register.
 * @type {string}
 */
const action = "/auth/register";

/**
 * The HTTP method to use for register.
 * @type {string}
 */
const method = "post";

/**
 * Makes a request to the register endpoint with the provided profile.
 * If the response is successful, returns the response as JSON.
 * If the response is not successful, throws an error with the response message.
 *
 * @param {Object} profile The user profile to register with.
 * @param {string} profile.username The username of the user.
 * @param {string} profile.password The password of the user.
 * @param {string} profile.email The email of the user.
 * @returns {Promise<Object>} The response from the server, as a JSON object.
 * @throws {Error} If the response is not ok.
 */
export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  console.log(registerURL);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors[0].message);
  }

  return json;
}
