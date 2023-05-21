import { load } from "/source/js/storage/index.mjs";

/**
 * Constructs the headers for authenticated API requests.
 * Adds "Content-Type": "application/json" and "Authorization": `Bearer ${token}` headers.
 *
 * @returns {Object} The headers object.
 */
export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

/**
 * Makes a fetch request to a given URL with optional settings.
 * Adds the headers required for authenticated requests.
 *
 * @param {string} url - The URL to request.
 * @param {Object} [options={}] - The options you want to pass for the fetch request.
 * @returns {Promise<Response>} The Response object represents the response to the request.
 */
export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
